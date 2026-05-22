/**
 * APP.JS - Logica principală a aplicației
 * Gestionează stările (home, quiz, results) și tranziții
 */

import QuizEngine from './core/quizEngine.js';
import Scorer from './core/scorer.js';
import { renderHome, renderQuiz, renderResults, renderFeedback } from './ui/render.js';
import { cplusplus } from './data/cpp.js';
import { python } from './data/python.js';

export default class App {
    constructor() {
        this.state = 'home'; // home, quiz, feedback, results
        this.currentLanguage = null;
        this.quizEngine = null;
        this.scorer = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizQuestions = [];
        this.lastAnswer = null;
        this.lastQuestion = null;
        
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
            },
            'python': {
                name: 'Python',
                icon: '🐍',
                description: 'Python pentru clasa a 7-a',
                data: python
            }
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
        const isCorrect = answer === question.correctAnswer;
        
        this.userAnswers.push({
            questionId: question.id,
            answer: answer,
            isCorrect: isCorrect
        });
        
        // Calculează scor parțial
        if (isCorrect) {
            this.score += 1;
        }

        // 📊 Salvează în Spaced Repetition
        this.saveQuestionHistory(question.id, isCorrect, answer);
        
        // Salvează răspunsul și întrebarea pentru afișarea feedback-ului
        this.lastAnswer = answer;
        this.lastQuestion = question;
        
        // Mergi la starea feedback
        this.state = 'feedback';
        this.render();
    }
    
    /**
     * Continuă la următoarea întrebare după feedback
     */
    continueToNextQuestion() {
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.state = 'quiz';
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
     * ===== SPACED REPETITION SYSTEM =====
     */

    /**
     * Salvează istoric răspuns pentru Spaced Repetition
     */
    saveQuestionHistory(questionId, wasCorrect, userAnswer) {
        const sr = JSON.parse(localStorage.getItem('spacedRepetition') || '{}');
        
        if (!sr[questionId]) {
            sr[questionId] = {
                id: questionId,
                attempts: 0,
                correct: 0,
                incorrect: 0,
                lastAnswered: null,
                nextReview: null,
                interval: 1 // zile
            };
        }

        // Update counters
        sr[questionId].attempts++;
        if (wasCorrect) {
            sr[questionId].correct++;
        } else {
            sr[questionId].incorrect++;
        }
        sr[questionId].lastAnswered = new Date().toISOString();

        // Calculează următoarea review date
        if (wasCorrect && sr[questionId].correct % 3 === 0) {
            // După 3 răspunsuri corecte consecutive, crește interval
            if (sr[questionId].interval === 1) {
                sr[questionId].interval = 3; // 3 zile
            } else if (sr[questionId].interval === 3) {
                sr[questionId].interval = 7; // 7 zile
            }
        } else if (!wasCorrect) {
            // Reset interval la 1 zi dacă greșit
            sr[questionId].interval = 1;
        }

        // Setează următoarea review date
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + sr[questionId].interval);
        sr[questionId].nextReview = nextDate.toISOString();

        localStorage.setItem('spacedRepetition', JSON.stringify(sr));
    }

    /**
     * Obține întrebări care trebuie reviewate azi
     */
    getReviewQuestions(languageKey) {
        const sr = JSON.parse(localStorage.getItem('spacedRepetition') || '{}');
        const languageData = this.languages[languageKey].data;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const reviewIds = Object.keys(sr).filter(qId => {
            const item = sr[qId];
            if (!item.nextReview) return false;
            
            const reviewDate = new Date(item.nextReview);
            reviewDate.setHours(0, 0, 0, 0);
            
            return reviewDate <= today;
        });

        // Returnează întrebările de review
        return reviewIds
            .map(qId => languageData.find(q => q.id === qId))
            .filter(q => q); // Remove undefined
    }

    /**
     * Obține statistici SR per întrebare
     */
    getQuestionStats(questionId) {
        const sr = JSON.parse(localStorage.getItem('spacedRepetition') || '{}');
        return sr[questionId] || null;
    }

    /**
     * Obține summary SR
     */
    getSpacedRepetitionSummary() {
        const sr = JSON.parse(localStorage.getItem('spacedRepetition') || '{}');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let needsReview = 0;
        let totalReviewed = 0;
        let masteredCount = 0; // 7+ zile interval

        Object.values(sr).forEach(item => {
            totalReviewed++;
            
            if (item.nextReview) {
                const reviewDate = new Date(item.nextReview);
                reviewDate.setHours(0, 0, 0, 0);
                if (reviewDate <= today) {
                    needsReview++;
                }
            }

            if (item.interval >= 7) {
                masteredCount++;
            }
        });

        return {
            totalReviewed,
            needsReview,
            masteredCount
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
            const srSummary = this.getSpacedRepetitionSummary();
            html += renderHome(this.languages, this.getStats(), srSummary);
        } else if (this.state === 'quiz') {
            html += renderQuiz(
                this.getCurrentQuestion(),
                this.currentQuestionIndex + 1,
                this.quizQuestions.length,
                this.languages[this.currentLanguage]
            );
        } else if (this.state === 'feedback') {
            html += renderFeedback(
                this.lastQuestion,
                this.lastAnswer,
                this.currentQuestionIndex + 1,
                this.quizQuestions.length
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
        } else if (this.state === 'feedback') {
            this.attachFeedbackEventListeners();
        } else if (this.state === 'results') {
            this.attachResultsEventListeners();
        }
    }
    
    /**
     * Event listeners pentru home screen
     */
    attachHomeEventListeners() {
        // Butoane limbaj
        document.querySelectorAll('[data-language]').forEach(btn => {
            btn.addEventListener('click', () => {
                const language = btn.dataset.language;
                this.selectLanguage(language);
            });
        });

        // Button "Începe Review" pentru Spaced Repetition
        const reviewBtn = document.querySelector('[data-action="start-review"]');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => {
                // TODO: Implementare quiz de review
                alert('Review feature coming soon!');
            });
        }
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
     * Event listeners pentru feedback screen
     */
    attachFeedbackEventListeners() {
        document.querySelector('[data-action="next-feedback"]')?.addEventListener('click', () => {
            this.continueToNextQuestion();
        });
        
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
