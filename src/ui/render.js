/**
 * RENDER.JS - Funcții de rendering pentru pagini
 * Responsabilități:
 * - Render home screen
 * - Render quiz screen
 * - Render results screen
 */

import { renderLanguageCard, renderQuestionCard, renderResultsCard, renderReviewCard } from './components.js';

/**
 * Renderizează home screen
 */
export function renderHome(languages, stats) {
    let html = `
        <div class="home-screen active">
            <div class="welcome-section">
                <div class="welcome-icon">📚</div>
                <h1 class="welcome-title">Bine ai venit la CodeQuiz!</h1>
                <p class="welcome-subtitle">Învață și testează-ți cunoștințele de programare</p>
            </div>
            
            <div>
                <h2 style="text-align: center; margin-bottom: 1.5rem;">Selectează un limbaj de programare</h2>
                <div class="language-grid">
    `;
    
    Object.entries(languages).forEach(([key, lang]) => {
        html += renderLanguageCard(key, lang);
    });
    
    html += `
                </div>
            </div>
            
            <div class="stats-section">
                <div class="stat-card">
                    <div class="stat-value">${stats.totalQuizzes}</div>
                    <div class="stat-label">Teste completate</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${stats.averageScore}</div>
                    <div class="stat-label">Medie scor</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${stats.bestScore}</div>
                    <div class="stat-label">Cel mai bun scor</div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

/**
 * Renderizează quiz screen
 */
export function renderQuiz(question, currentNumber, totalQuestions, language) {
    const progressPercentage = (currentNumber / totalQuestions) * 100;
    
    let html = `
        <div class="quiz-screen active">
            <div class="quiz-header">
                <span class="quiz-language">${language.name}</span>
                <span class="quiz-counter">Întrebarea ${currentNumber} din ${totalQuestions}</span>
            </div>
            
            <div class="progress-section">
                <div class="progress-label">
                    <span>Progres</span>
                    <span>${currentNumber}/${totalQuestions}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
            </div>
            
            ${renderQuestionCard(question, currentNumber)}
            
            <div class="quiz-actions">
                <button class="btn btn-secondary" data-action="back-home">← Înapoi</button>
    `;
    
    // Butonul "Următoarea întrebare" se va arăta doar pentru anumite tipuri
    if (question.type === 'text-complete' || question.type === 'code-complete') {
        html += `<button class="btn btn-primary" data-action="next-question">Următoarea →</button>`;
    }
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

/**
 * Renderizează results screen
 */
export function renderResults(results, language) {
    const icon = results.rating >= 4 ? '🏆' : results.rating >= 3 ? '📈' : '📚';
    
    let html = `
        <div class="results-screen active">
            <div class="results-header">
                <div class="results-icon">${icon}</div>
                <h1 class="results-title">Test Finalizat!</h1>
                <p style="color: var(--text-secondary); font-size: 1.1rem;">Limbaj: ${language.name}</p>
            </div>
            
            <div class="score-display">
                ${renderResultsCard('Scor', `${results.score}/${10}`, 'scor')}
                ${renderResultsCard('Procent', `${results.percentage}%`, 'percent')}
                ${renderResultsCard('Corecte', `${results.correctAnswers}/${results.totalQuestions}`, 'correct')}
            </div>
            
            <div class="feedback-message ${results.feedback.type}">
                <strong>${results.feedback.title}</strong><br>
                ${results.feedback.message}
            </div>
            
            <div class="results-details">
                <div class="details-item">
                    <span class="details-label">Data testării</span>
                    <span class="details-value">${new Date(results.timestamp).toLocaleString('ro-RO')}</span>
                </div>
                <div class="details-item">
                    <span class="details-label">Limbaj</span>
                    <span class="details-value">${language.name}</span>
                </div>
                <div class="details-item">
                    <span class="details-label">Evaluare</span>
                    <span class="details-value">${'⭐'.repeat(results.rating)}${'☆'.repeat(5 - results.rating)}</span>
                </div>
            </div>
            
            ${renderReviewQuestions(results)}
            
            <div class="results-actions">
                <button class="btn btn-primary btn-large" data-action="new-quiz">Nou Test</button>
                <button class="btn btn-secondary btn-large" data-action="restart-quiz">Restart Same Questions</button>
                <button class="btn btn-secondary btn-large" data-action="home">Acasă</button>
            </div>
        </div>
    `;
    
    return html;
}

/**
 * Renderizează review-ul întrebărilor
 */
function renderReviewQuestions(results) {
    let html = `
        <div class="review-questions">
            <h2 class="review-title">Recenzie răspunsuri</h2>
    `;
    
    results.questions.forEach((question, index) => {
        const userAnswer = results.userAnswers[index];
        html += renderReviewCard(question, userAnswer, index + 1);
    });
    
    html += `</div>`;
    return html;
}
