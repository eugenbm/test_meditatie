# 🔧 Ghid Extensibilitate CodeQuiz

## 1. Adăugare Limbaj Nou (ex: Python)

### Pasul 1: Crează banca de întrebări

Crează fișierul: `src/data/python.js`

```javascript
/**
 * PYTHON QUESTION BANK
 * Minimum 100+ întrebări pentru o experiență bună
 */

export const python = [
    {
        id: 'py_001',
        language: 'Python',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este Python?',
        options: [
            'Un limbaj de programare interpretat',
            'Un limbaj compilat',
            'Un editor de text',
            'O bibliotecă C++'
        ],
        correctAnswer: 'Un limbaj de programare interpretat',
        explanation: 'Python este un limbaj interpretat, ușor de învățat pentru începători.'
    },
    {
        id: 'py_002',
        language: 'Python',
        category: 'Variables',
        difficulty: 'easy',
        type: 'true-false',
        question: 'În Python, nu trebuie să declari tipul variabilei.',
        correctAnswer: 'true',
        explanation: 'Python deduce tipul automat. x = 5 creează un int, x = "text" creează un string.'
    },
    // ... 150+ întrebări total
];
```

### Pasul 2: Update app.js

Editează `src/app.js`:

```javascript
// La început, adaugă import:
import { python } from './data/python.js';

// În constructor, update languages object:
this.languages = {
    'cpp': {
        name: 'C++',
        icon: '⚙️',
        description: 'Programare pentru începători',
        data: cplusplus
    },
    'python': {                          // ← ADAUGĂ
        name: 'Python',
        icon: '🐍',
        description: 'Programare ușoară și distractivă',
        data: python
    },
    // 'java': { ... }
    // 'javascript': { ... }
};
```

### Pasul 3: Gata!

Limbajul apare automat în:
- Home page (card cu limbaj)
- Quiz menu selection
- Rezultate (limbaj selectat)

## 2. Adăugare Noi Tipuri de Întrebări

Structura curentă suportă:
- `multiple-choice` ✅
- `true-false` ✅
- `text-complete` ✅
- `code-complete` ✅
- `trace-output` ✅

Pentru tip nou, ex: `matching`:

### 2.1. Update Question Bank

```javascript
{
    id: 'cpp_xyz',
    type: 'matching',  // ← Tip nou
    question: 'Potrivește conceptele:',
    pairs: [
        { left: 'int', right: 'Număr întreg' },
        { left: 'float', right: 'Număr real' },
        { left: 'bool', right: 'Adevărat/Fals' }
    ],
    correctAnswer: ['0', '1', '2'],  // indices pe care ai dragit
    explanation: 'Fiecare tip are o descriere specifică.'
}
```

### 2.2. Adaugă Render Component

Editează `src/ui/components.js`:

```javascript
export function renderMatching(question) {
    let html = `<div class="matching-container">`;
    
    html += `<div class="matching-left">`;
    question.pairs.forEach((pair, idx) => {
        html += `<div class="matching-item" draggable="true" data-id="${idx}">
            ${pair.left}
        </div>`;
    });
    html += `</div>`;
    
    html += `<div class="matching-right">`;
    question.pairs.forEach((pair) => {
        html += `<div class="matching-drop">${pair.right}</div>`;
    });
    html += `</div>`;
    
    html += `</div>`;
    return html;
}
```

### 2.3. Adaugă în renderQuestionCard

Editează `src/ui/render.js`:

```javascript
// În renderQuestionCard, adaugă:
} else if (question.type === 'matching') {
    html += renderMatching(question);
}
```

### 2.4. Update app.js pentru event listeners

```javascript
attachQuizEventListeners() {
    // ... alte listeners ...
    
    // Pentru matching
    const matchItems = document.querySelectorAll('[data-matching-item]');
    matchItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
}
```

## 3. Adăugare Categori Noi

Update question bank cu new `category`:

```javascript
{
    id: 'cpp_xyz',
    category: 'Pointers',  // ← Nou
    question: '...',
    // ...
}
```

Statistica se va actualiza automat în QuizEngine:

```javascript
const stats = quizEngine.getStats();
console.log(stats.byCategory); // Incluye 'Pointers'
```

## 4. Personalizare Design

### CSS Variables

Editează `style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Schimbă culoarea principală */
    --secondary-color: #ec4899;    
    --success-color: #10b981;
    /* ... etc ... */
}
```

### Layout Changes

- Card dimensions: `.language-card { width: 200px; }`
- Font size: Schimbă `font-size` în CSS
- Dark mode: Update culori în `body.dark-mode`

## 5. Integrare Backend API

Pentru viitor, când vrei server:

### 5.1. Crează `src/services/api.js`

```javascript
export async function fetchQuestions(language, count = 10) {
    const res = await fetch(
        `/api/questions?lang=${language}&count=${count}`
    );
    if (!res.ok) throw new Error('API error');
    return res.json();
}

export async function submitScore(result) {
    const res = await fetch('/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
    });
    return res.json();
}
```

### 5.2. Update `quizEngine.js`

```javascript
// Înlocuiește static data cu API:
async generateQuizFromAPI(language) {
    const questions = await fetchQuestions(language, 10);
    return questions;
}
```

### 5.3. Update `app.js`

```javascript
async initQuiz() {
    // În loc de QuizEngine.generateQuiz(10)
    this.quizQuestions = await this.quizEngine.generateQuizFromAPI(
        this.currentLanguage
    );
    this.render();
}
```

## 6. Adăugare Autentificare

### Viitor: Firebase

```javascript
// src/services/auth.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithGoogle } from 'firebase/auth';

const firebaseConfig = { ... };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithGoogle };
```

Update app.js cu login button.

## 7. Analytics & Tracking

```javascript
// src/services/analytics.js
export function trackQuizComplete(result) {
    if (window.gtag) {
        gtag('event', 'quiz_complete', {
            language: result.language,
            score: result.score,
            percentage: result.percentage
        });
    }
}
```

## 8. Moduri Avansate

### Timed Quiz

```javascript
// src/core/quizEngine.js
const TIME_PER_QUESTION = 30; // secunde

startTimer(questionIndex) {
    let time = TIME_PER_QUESTION;
    this.timerInterval = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(this.timerInterval);
            this.autoSubmit(); // Submitez automat
        }
        // Update UI with time
    }, 1000);
}
```

### Difficulty Levels

```javascript
initQuizByDifficulty(difficulty) {
    const questions = this.quizEngine.getQuestionsByDifficulty(difficulty);
    const selected = this.shuffle(questions).slice(0, 10);
    this.quizQuestions = selected;
}
```

### Certificat

```javascript
// src/ui/components.js
export function renderCertificate(result) {
    return `
        <div class="certificate">
            <h1>Certificat de Completare</h1>
            <p>${result.userName}</p>
            <p>A completat testul: ${result.language}</p>
            <p>Scor: ${result.score}/10</p>
            <p>Data: ${new Date(result.timestamp).toLocaleDateString('ro-RO')}</p>
        </div>
    `;
}
```

---

## 📋 Checklist Extensie

Înainte de a lansa feature nou:

- [ ] Adaug cod în locul corect
- [ ] Import-uri sunt corecte
- [ ] Testez local (Live Server)
- [ ] Verific console pentru erori (F12)
- [ ] Responsive (mobile check)
- [ ] Dark mode merge
- [ ] localStorage funcționează
- [ ] Documentez în README

## 🧪 Testing Extensii

```javascript
// În browser console (F12):
__APP__.quizEngine.getStats()  // Verifica dacă banca e OK
__APP__.languages              // Verifica dacă limbajul e acolo
localStorage.getItem('quizHistory')  // Verifica salvarea
```

---

**Succes la extensii! 🚀**

