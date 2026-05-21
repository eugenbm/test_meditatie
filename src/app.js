/**
 * APP.JS - Logica principală a aplicației
 * Gestionează stările (home, quiz, results) și tranziții
 */

import QuizEngine from './core/quizEngine.js';
import Scorer from './core/scorer.js';
import { renderHome, renderQuiz, renderResults } from './ui/render.js';
import { cplusplus } from './data/cpp.js';

export default class App {
    constructor() {
        this.state = 'home'; // home, quiz, results
        this.currentLanguage = null;
        this.quizEngine = null;
        this.scorer = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizQuestions = [];
        
        // Elemente DOM
        this.appContainer = document.getElementById('app');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        
        // Limbaje disponibile
        this.languages = {
            'cpp': {
                name: 'C++',
                icon: '⚙️',
                description: 'Programare pentru începători',
                data: cplusplus
            }
            // Voi adăuga mai tarziu: Python, Java, JavaScript, C#
        };
        
        // Inițializez teme
        this.initTheme();
    }
    
    init() {
        // Eliminează spinnerul de loading
        setTimeout(() => {
            this.loadingSpinner.remove();
            this.render();
        }, 500);
    }
    
    /**
     * Inițializează tema (dark mode / light mode)
     */
    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
    
    /**
     * Comută tema dark/light
     */
    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    /**
     * Selectează limbaj și inițiază test
     */
    selectLanguage(languageKey) {
        this.currentLanguage = languageKey;
        this.initQuiz();
    }
    
    /**
     * Inițiază testul
     */
    initQuiz() {
        const languageData = this.languages[this.currentLanguage].data;
        
        // Crează motorul de teste și generator de scoruri
        this.quizEngine = new QuizEngine(languageData);
        this.scorer = new Scorer();
        
        // Generează 10 întrebări random
        this.quizQuestions = this.quizEngine.generateQuiz(10);
        
        // Reset stare
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        
        // Schimbă la starea quiz
        this.state = 'quiz';
        this.render();
    }
    
    /**
     * Obține întrebarea curentă
     */
    getCurrentQuestion() {
        return this.quizQuestions[this.currentQuestionIndex];
    }
    
    /**
     * Răspunde la o întrebare
     */
    answerQuestion(answer) {
        const question = this.getCurrentQuestion();
        this.userAnswers.push({
            questionId: question.id,
            answer: answer,
            isCorrect: answer === question.correctAnswer
        });
        
        // Calculează scor parțial
        if (this.userAnswers[this.currentQuestionIndex].isCorrect) {
            this.score += 1;
        }
        
        // Treci la întrebarea următoare
        this.nextQuestion();
    }
    
    /**
     * Treci la întrebarea următoare
     */
    nextQuestion() {
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.render();
        } else {
            // Testul a fost finalizat
            this.finishQuiz();
        }
    }
    
    /**
     * Finalizează testul și calculează rezultatele
     */
    finishQuiz() {
        const results = this.scorer.calculateScore(
            this.score,
            this.quizQuestions.length
        );
        
        this.results = {
            ...results,
            questions: this.quizQuestions,
            userAnswers: this.userAnswers,
            language: this.currentLanguage,
            timestamp: new Date().toISOString()
        };
        
        // Salvează în localStorage
        this.saveResultsToStorage();
        
        this.state = 'results';
        this.render();
    }
    
    /**
     * Salvează rezultatele în localStorage
     */
    saveResultsToStorage() {
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        history.push(this.results);
        localStorage.setItem('quizHistory', JSON.stringify(history));
    }
    
    /**
     * Obține statistici din localStorage
     */
    getStats() {
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        return {
            totalQuizzes: history.length,
            averageScore: history.length > 0 
                ? (history.reduce((sum, r) => sum + r.score, 0) / history.length).toFixed(1)
                : 0,
            bestScore: history.length > 0 
                ? Math.max(...history.map(r => r.score))
                : 0
        };
    }
    
    /**
     * Restartează testul
     */
    restartQuiz() {
        this.initQuiz();
    }
    
    /**
     * Revine la home
     */
    goHome() {
        this.state = 'home';
        this.currentLanguage = null;
        this.quizQuestions = [];
        this.userAnswers = [];
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.render();
    }
    
    /**
     * Renderizează ecranul curent
     */
    render() {
        let html = '';
        
        // Header
        html += this.renderHeader();
        
        // Content
        html += '<div class="main-content">';
        
        if (this.state === 'home') {
            html += renderHome(this.languages, this.getStats());
        } else if (this.state === 'quiz') {
            html += renderQuiz(
                this.getCurrentQuestion(),
                this.currentQuestionIndex + 1,
                this.quizQuestions.length,
                this.languages[this.currentLanguage]
            );
        } else if (this.state === 'results') {
            html += renderResults(this.results, this.languages[this.currentLanguage]);
        }
        
        html += '</div>';
        
        // Footer
        html += this.renderFooter();
        
        this.appContainer.innerHTML = html;
        
        // Atașez event listeners după render
        this.attachEventListeners();
    }
    
    /**
     * Renderizează header
     */
    renderHeader() {
        return `
            <header class="header">
                <div class="header-content">
                    <div class="header-title">
                        <span class="header-title-icon">💻</span>
                        <span>CodeQuiz</span>
                    </div>
                    <div class="header-controls">
                        <button class="dark-mode-toggle" data-action="toggle-theme">
                            ${document.body.classList.contains('dark-mode') ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </header>
        `;
    }
    
    /**
     * Renderizează footer
     */
    renderFooter() {
        return `
            <footer class="footer">
                <p>CodeQuiz © 2025 | Platformă de teste pentru programatori în dezvoltare 📚</p>
            </footer>
        `;
    }
    
    /**
     * Atașez event listeners dinamice
     */
    attachEventListeners() {
        // Toggle tema
        document.querySelector('[data-action="toggle-theme"]')?.addEventListener('click', () => {
            this.toggleTheme();
            this.render();
        });
        
        if (this.state === 'home') {
            this.attachHomeEventListeners();
        } else if (this.state === 'quiz') {
            this.attachQuizEventListeners();
        } else if (this.state === 'results') {
            this.attachResultsEventListeners();
        }
    }
    
    /**
     * Event listeners pentru home screen
     */
    attachHomeEventListeners() {
        document.querySelectorAll('[data-language]').forEach(btn => {
            btn.addEventListener('click', () => {
                const language = btn.dataset.language;
                this.selectLanguage(language);
            });
        });
    }
    
    /**
     * Event listeners pentru quiz screen
     */
    attachQuizEventListeners() {
        // Răspunsuri
        document.querySelectorAll('[data-option-id]').forEach(option => {
            option.addEventListener('change', () => {
                const answer = option.value;
                this.answerQuestion(answer);
            });
        });
        
        // Text input
        const textInput = document.querySelector('[data-text-answer]');
        if (textInput) {
            const nextBtn = document.querySelector('[data-action="next-question"]');
            nextBtn?.addEventListener('click', () => {
                const answer = textInput.value.trim();
                if (answer) {
                    this.answerQuestion(answer);
                } else {
                    alert('Vă rugăm completați răspunsul!');
                }
            });
        }
        
        // Butonul de revenit la home
        document.querySelector('[data-action="back-home"]')?.addEventListener('click', () => {
            this.goHome();
        });
    }
    
    /**
     * Event listeners pentru results screen
     */
    attachResultsEventListeners() {
        document.querySelector('[data-action="restart-quiz"]')?.addEventListener('click', () => {
            this.restartQuiz();
        });
        
        document.querySelector('[data-action="new-quiz"]')?.addEventListener('click', () => {
            this.initQuiz();
        });
        
        document.querySelector('[data-action="home"]')?.addEventListener('click', () => {
            this.goHome();
        });
    }
}
