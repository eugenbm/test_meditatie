/**
 * QUIZ ENGINE - Motorul de generare și gestionare a testelor
 * Responsabilități: 
 * - Selectare random întrebări
 * - Validare răspunsuri
 * - Gestionare logică test
 */

export default class QuizEngine {
    constructor(questionBanks) {
        this.questionBanks = questionBanks;
        this.allQuestions = this.flattenQuestions(questionBanks);
    }
    
    /**
     * Aplatizează structura de întrebări din banca de date
     * Suportă structură ierarhică (categorii)
     */
    flattenQuestions(banks) {
        let questions = [];
        
        if (Array.isArray(banks)) {
            // Directă - array de întrebări
            questions = banks;
        } else {
            // Ierarhică - object cu categorii
            Object.keys(banks).forEach(category => {
                if (Array.isArray(banks[category])) {
                    questions = questions.concat(banks[category]);
                } else if (typeof banks[category] === 'object') {
                    // Nested categories
                    Object.keys(banks[category]).forEach(subCategory => {
                        if (Array.isArray(banks[category][subCategory])) {
                            questions = questions.concat(banks[category][subCategory]);
                        }
                    });
                }
            });
        }
        
        return questions;
    }
    
    /**
     * Generează test random cu numărul dorit de întrebări
     * @param {number} count - Numărul de întrebări
     * @returns {Array} Array de întrebări selectate random
     */
    generateQuiz(count = 10) {
        if (count > this.allQuestions.length) {
            count = this.allQuestions.length;
        }
        
        // Shuffle și select
        const shuffled = this.shuffle([...this.allQuestions]);
        return shuffled.slice(0, count);
    }
    
    /**
     * Shuffle array (Fisher-Yates)
     */
    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    /**
     * Validează un răspuns
     * @param {number} questionId - ID întrebării
     * @param {any} userAnswer - Răspunsul utilizatorului
     * @returns {boolean} True dacă răspunsul este corect
     */
    validateAnswer(questionId, userAnswer) {
        const question = this.getQuestionById(questionId);
        if (!question) return false;
        
        // Normalizare pentru comparație (trim, lowercase)
        const normalize = (str) => {
            if (typeof str !== 'string') return str;
            return str.trim().toLowerCase();
        };
        
        const correctAnswer = Array.isArray(question.correctAnswer)
            ? question.correctAnswer.map(normalize)
            : normalize(question.correctAnswer);
        
        const normalizedAnswer = typeof userAnswer === 'string' 
            ? normalize(userAnswer)
            : userAnswer;
        
        if (Array.isArray(correctAnswer)) {
            return correctAnswer.includes(normalizedAnswer);
        }
        
        return normalizedAnswer === correctAnswer;
    }
    
    /**
     * Obține o întrebare după ID
     */
    getQuestionById(id) {
        return this.allQuestions.find(q => q.id === id);
    }
    
    /**
     * Obține întrebări după categorie
     */
    getQuestionsByCategory(category) {
        return this.allQuestions.filter(q => q.category === category);
    }
    
    /**
     * Obține întrebări după dificultate
     */
    getQuestionsByDifficulty(difficulty) {
        return this.allQuestions.filter(q => q.difficulty === difficulty);
    }
    
    /**
     * Obține statistici despre banca de întrebări
     */
    getStats() {
        const categories = [...new Set(this.allQuestions.map(q => q.category))];
        const types = [...new Set(this.allQuestions.map(q => q.type))];
        
        return {
            totalQuestions: this.allQuestions.length,
            categories: categories,
            types: types,
            byCategory: categories.reduce((acc, cat) => {
                acc[cat] = this.allQuestions.filter(q => q.category === cat).length;
                return acc;
            }, {}),
            byType: types.reduce((acc, type) => {
                acc[type] = this.allQuestions.filter(q => q.type === type).length;
                return acc;
            }, {})
        };
    }
}
