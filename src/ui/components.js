/**
 * COMPONENTS.JS - Componente UI reutilizabile
 * Funcții mici pentru rendering componentelor
 */

/**
 * Renderizează card de limbaj
 */
export function renderLanguageCard(key, language) {
    return `
        <div class="language-card" data-language="${key}">
            <div class="language-icon">${language.icon}</div>
            <div class="language-name">${language.name}</div>
            <div class="language-description">${language.description}</div>
        </div>
    `;
}

/**
 * Renderizează o întrebare
 */
export function renderQuestionCard(question, questionNumber) {
    let html = `
        <div class="question-card">
            <div class="question-title">${escapeHtml(question.question)}</div>
    `;
    
    // Afișare cod dacă există
    if (question.code) {
        html += `<pre class="question-code"><code>${escapeHtml(question.code)}</code></pre>`;
    }
    
    // Diferite tipuri de întrebări
    if (question.type === 'multiple-choice') {
        html += renderMultipleChoice(question);
    } else if (question.type === 'true-false') {
        html += renderTrueFalse(question);
    } else if (question.type === 'text-complete') {
        html += renderTextComplete(question);
    } else if (question.type === 'code-complete') {
        html += renderCodeComplete(question);
    } else if (question.type === 'trace-output') {
        html += renderTraceOutput(question);
    }
    
    html += `</div>`;
    return html;
}

/**
 * Renderizează Multiple Choice
 */
function renderMultipleChoice(question) {
    let html = `<div class="options-container">`;
    
    question.options.forEach((option, index) => {
        const id = `opt_${question.id}_${index}`;
        html += `
            <label class="option">
                <input 
                    type="radio" 
                    name="question_${question.id}" 
                    value="${escapeHtml(option)}"
                    data-option-id="${id}"
                >
                <span class="option-text">${escapeHtml(option)}</span>
            </label>
        `;
    });
    
    html += `</div>`;
    return html;
}

/**
 * Renderizează True/False
 */
function renderTrueFalse(question) {
    return `
        <div class="options-container">
            <label class="option">
                <input 
                    type="radio" 
                    name="question_${question.id}" 
                    value="true"
                    data-option-id="true_${question.id}"
                >
                <span class="option-text">Adevărat</span>
            </label>
            <label class="option">
                <input 
                    type="radio" 
                    name="question_${question.id}" 
                    value="false"
                    data-option-id="false_${question.id}"
                >
                <span class="option-text">Fals</span>
            </label>
        </div>
    `;
}

/**
 * Renderizează Text Complete
 */
function renderTextComplete(question) {
    return `
        <div class="options-container">
            <input 
                type="text" 
                class="text-input" 
                placeholder="Completează răspunsul..."
                data-text-answer
                data-answer-for="${question.id}"
            >
        </div>
    `;
}

/**
 * Renderizează Code Complete
 */
function renderCodeComplete(question) {
    return `
        <div class="options-container">
            <textarea 
                class="text-input" 
                placeholder="Completează codul..."
                data-text-answer
                data-answer-for="${question.id}"
                rows="6"
                style="font-family: 'Courier New', monospace;"
            ></textarea>
        </div>
    `;
}

/**
 * Renderizează Trace Output
 */
function renderTraceOutput(question) {
    let html = `<div class="options-container">`;
    
    question.options.forEach((option, index) => {
        const id = `opt_${question.id}_${index}`;
        html += `
            <label class="option">
                <input 
                    type="radio" 
                    name="question_${question.id}" 
                    value="${escapeHtml(option)}"
                    data-option-id="${id}"
                >
                <span class="option-text"><code>${escapeHtml(option)}</code></span>
            </label>
        `;
    });
    
    html += `</div>`;
    return html;
}

/**
 * Renderizează card de rezultat
 */
export function renderResultsCard(label, value, type = '') {
    return `
        <div class="score-box">
            <div class="score-number" style="color: ${type === 'scor' ? 'var(--primary-color)' : type === 'percent' ? 'var(--success-color)' : 'var(--warning-color)'}">${value}</div>
            <div class="score-label">${label}</div>
        </div>
    `;
}

/**
 * Renderizează card de review
 */
export function renderReviewCard(question, userAnswer, questionNumber) {
    const isCorrect = userAnswer.isCorrect;
    
    let html = `
        <div class="review-item">
            <div class="review-question">
                ${questionNumber}. ${escapeHtml(question.question)}
            </div>
    `;
    
    // Afișare răspuns utilizator
    html += `
        <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? '✓ Corect' : '✗ Incorect'}</strong>
        </div>
    `;
    
    if (question.type === 'multiple-choice' || question.type === 'true-false' || question.type === 'trace-output') {
        html += `
            <div style="margin-bottom: 0.5rem;">
                <strong>Răspunsul tău:</strong> ${escapeHtml(userAnswer.answer)}
            </div>
            <div style="color: var(--text-secondary);">
                <strong>Răspunsul corect:</strong> ${escapeHtml(question.correctAnswer)}
            </div>
        `;
    } else if (question.type === 'text-complete' || question.type === 'code-complete') {
        html += `
            <div style="margin-bottom: 0.5rem;">
                <strong>Răspunsul tău:</strong> <code>${escapeHtml(userAnswer.answer)}</code>
            </div>
            <div style="color: var(--text-secondary);">
                <strong>Răspunsul corect:</strong> <code>${escapeHtml(String(question.correctAnswer))}</code>
            </div>
        `;
    }
    
    // Explicație
    if (question.explanation) {
        html += `
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); color: var(--text-secondary);">
                <strong>Explicație:</strong> ${escapeHtml(question.explanation)}
            </div>
        `;
    }
    
    html += `</div>`;
    return html;
}

/**
 * Escape HTML pentru securitate
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}
