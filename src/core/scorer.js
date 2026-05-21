/**
 * SCORER - Sistem de notare și feedback
 * Responsabilități:
 * - Calculare scor final
 * - Procentaj
 * - Feedback automat
 * - Statistici
 */

export default class Scorer {
    constructor() {
        this.maxScore = 10;
    }
    
    /**
     * Calculează scorul final
     * @param {number} correctAnswers - Numărul de răspunsuri corecte
     * @param {number} totalQuestions - Numărul total de întrebări
     * @returns {Object} Obiect cu scor, procent și feedback
     */
    calculateScore(correctAnswers, totalQuestions) {
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const score = (correctAnswers / totalQuestions) * this.maxScore;
        
        return {
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            score: Math.round(score * 10) / 10, // 1 zecimal
            percentage: percentage,
            feedback: this.generateFeedback(percentage),
            rating: this.getRating(percentage)
        };
    }
    
    /**
     * Generează feedback automat
     */
    generateFeedback(percentage) {
        if (percentage >= 90) {
            return {
                title: '🎉 Excelent!',
                message: 'Felicitări! Ai demonstrat o înțelegere excelentă a conceptelor. Continuă așa!',
                type: 'excellent'
            };
        } else if (percentage >= 75) {
            return {
                title: '👍 Foarte bine!',
                message: 'Bun job! Ai o înțelegere solidă. Revizuiește punctele mai slabe și iei 10!',
                type: 'good'
            };
        } else if (percentage >= 60) {
            return {
                title: '📚 Bine, dar mai sunt de îmbunătățit',
                message: 'Ai stăpânit o parte bună din material. Studiază mai atent capitolele cu probleme.',
                type: 'fair'
            };
        } else {
            return {
                title: '💪 Nu renunța!',
                message: 'Ai nevoie de mai mult studiu. Citește din nou lecțiile și încearcă din nou!',
                type: 'needs-work'
            };
        }
    }
    
    /**
     * Obține rating (stele sau altceva)
     */
    getRating(percentage) {
        if (percentage >= 90) return 5;
        if (percentage >= 75) return 4;
        if (percentage >= 60) return 3;
        if (percentage >= 40) return 2;
        return 1;
    }
    
    /**
     * Calculează statistici detailate
     */
    calculateDetailedStats(userAnswers, questions) {
        const stats = {
            totalQuestions: questions.length,
            correct: userAnswers.filter(a => a.isCorrect).length,
            incorrect: userAnswers.filter(a => !a.isCorrect).length,
            percentage: 0,
            byCategory: {},
            byType: {}
        };
        
        stats.percentage = Math.round((stats.correct / stats.totalQuestions) * 100);
        
        // Statistici pe categorie
        questions.forEach((q, index) => {
            const isCorrect = userAnswers[index]?.isCorrect;
            
            if (!stats.byCategory[q.category]) {
                stats.byCategory[q.category] = { correct: 0, total: 0 };
            }
            stats.byCategory[q.category].total++;
            if (isCorrect) stats.byCategory[q.category].correct++;
            
            // Statistici pe tip
            if (!stats.byType[q.type]) {
                stats.byType[q.type] = { correct: 0, total: 0 };
            }
            stats.byType[q.type].total++;
            if (isCorrect) stats.byType[q.type].correct++;
        });
        
        return stats;
    }
}
