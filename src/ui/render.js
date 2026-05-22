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
export function renderHome(languages, stats, srSummary = null) {
    let html = `
        <div class="home-screen active">
            <div class="welcome-section">
                <div class="welcome-icon">📚</div>
                <h1 class="welcome-title">Bine ai venit la CodeQuiz!</h1>
                <p class="welcome-subtitle">Învață și testează-ți cunoștințele de programare</p>
            </div>
    `;

    // 📊 Spaced Repetition Summary
    if (srSummary && srSummary.needsReview > 0) {
        html += `
            <div class="review-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; color: white; text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔄</div>
                <h3 style="margin: 0 0 0.5rem 0;">Repet-ție Diurnă</h3>
                <p style="margin: 0; font-size: 1.2rem; font-weight: bold;">${srSummary.needsReview} întrebări pentru review azi!</p>
                <button class="btn btn-primary" data-action="start-review" style="margin-top: 1rem;">Începe Review 📖</button>
            </div>
        `;
    }

    // Spaced Repetition Stats
    if (srSummary) {
        html += `
            <div class="sr-stats" style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="flex: 1; background: #f0f0f0; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #667eea;">${srSummary.totalReviewed}</div>
                    <div style="font-size: 0.9rem; color: #666;">Întrebări Revăzute</div>
                </div>
                <div style="flex: 1; background: #f0f0f0; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #764ba2;">${srSummary.masteredCount}</div>
                    <div style="font-size: 0.9rem; color: #666;">Stăpânite (7+ zile)</div>
                </div>
            </div>
        `;
    }
            
    html += `
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
 * Renderizează feedback screen după fiecare răspuns
 */
export function renderFeedback(question, userAnswer, currentNumber, totalQuestions) {
    const isCorrect = userAnswer === question.correctAnswer;
    
    let html = `
        <div class="feedback-screen active">
            <div class="feedback-header">
                <div class="feedback-icon ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓' : '✗'}
                </div>
                <h1 class="feedback-title">
                    ${isCorrect ? 'Răspuns Corect!' : 'Răspuns Greșit!'}
                </h1>
                <p class="feedback-counter">Întrebarea ${currentNumber} din ${totalQuestions}</p>
            </div>
            
            <div class="feedback-content">
                <div class="question-section">
                    <h3>Întrebarea:</h3>
                    <p class="feedback-question">${question.question}</p>
                </div>
    `;
    
    if (!isCorrect) {
        html += `
                <div class="answer-section wrong-answer">
                    <div class="answer-label">Răspunsul tău:</div>
                    <div class="answer-text user-answer">${userAnswer}</div>
                </div>
                
                <div class="answer-section correct-answer">
                    <div class="answer-label">Răspunsul Corect:</div>
                    <div class="answer-text">${question.correctAnswer}</div>
                </div>
                
                <div class="explanation-section">
                    <h3>Explicație:</h3>
                    <p>${question.explanation}</p>
                </div>
        `;
    } else {
        html += `
                <div class="answer-section correct-answer">
                    <div class="answer-label">Răspunsul tău (corect):</div>
                    <div class="answer-text">${userAnswer}</div>
                </div>
                
                <div class="explanation-section">
                    <h3>Explicație:</h3>
                    <p>${question.explanation}</p>
                </div>
        `;
    }
    
    html += `
            </div>
            
            <div class="feedback-actions">
                ${currentNumber < totalQuestions 
                    ? `<button class="btn btn-primary btn-large" data-action="next-feedback">Următoarea Întrebare →</button>` 
                    : `<button class="btn btn-success btn-large" data-action="next-feedback">Finalizează Testul →</button>`
                }
                <button class="btn btn-secondary" data-action="back-home">← Acasă</button>
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
