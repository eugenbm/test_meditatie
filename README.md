# CodeQuiz - Platformă de Teste Programare

## 📚 Descriere

**CodeQuiz** este o aplicație web interactivă, modernă și educațională destinată elevilor de clasele 5-6 pentru a-și testa și consolida cunoștințele de programare. Aplicația oferă o experiență de utilizare plăcută cu design responsive, dark mode și o arhitectură modulară scalabilă.

## ✨ Caracteristici

### Funcționalități Principale

- ✅ **Teste Interactive** - 10 întrebări random dintr-o bancă de 155+ întrebări
- ✅ **Tipuri Diverse de Întrebări**:
  - Multiple choice (grilă cu 4 opțiuni)
  - Adevărat/Fals
  - Completare text
  - Completare cod
  - Trace output (ce afișează codul)

- ✅ **Sistem de Notare** - Scor 1-10, procentaj, feedback automat
- ✅ **Rezumat Complet** - Recenzie răspunsuri cu explicații
- ✅ **Istoric Teste** - Salvare automată în localStorage
- ✅ **Dark Mode** - Interfață ușor de folosit în orice lumină
- ✅ **Design Responsive** - Compatibil desktop, tablet, mobile
- ✅ **100% Static** - Funcționează pe GitHub Pages fără backend

### Conținut C++

**155 Întrebări** structurate pe categorii:

- **Basics** (20) - include, cout, cin, comentarii
- **Variables** (15) - tipuri de date, declarații
- **Operators** (20) - aritmetici, logici, comparație
- **If/Else** (20) - condiții, logic operators
- **Loops** (30) - for, while, do-while, break, continue
- **Arrays/Vectors** (50+) - declarare, inițializare, parcurgere, operații

**Focus Vectori**: 50+ întrebări dedicate (declarare, indexare, parcurgere, suma, min/max, diferență vs variabile, etc.)

## 📁 Structură Proiect

```
test_meditatie/
├── index.html              # Pagina principală HTML
├── style.css               # Stiluri CSS (responsive + dark mode)
├── README.md               # Documentație
└── src/
    ├── main.js             # Entry point
    ├── app.js              # Logică aplicație principală
    ├── router.js           # (Opțional) Rutare
    ├── core/
    │   ├── quizEngine.js   # Motor teste: generare random, validare
    │   └── scorer.js       # Sistem notare, feedback, statistici
    ├── data/
    │   ├── cpp.js          # Banca: 155 întrebări C++
    │   ├── python.js       # (Viitor) Python
    │   ├── java.js         # (Viitor) Java
    │   └── ...
    └── ui/
        ├── render.js       # Funcții render pagini (home, quiz, results)
        └── components.js   # Componente UI reutilizabile
```

## 🚀 Cum Să Pornești

### Local (Development)

#### Opțiunea 1: Live Server (Recomandată)

1. **Clonează/descarcă** proiectul
2. **Deschide în VS Code**
3. **Instalează extensia** "Live Server" (Ritwick Dey)
4. **Right-click pe index.html** → "Open with Live Server"
5. Browser se deschide automat la `http://localhost:5500`

#### Opțiunea 2: Python Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Acces: `http://localhost:8000`

#### Opțiunea 3: Node.js

```bash
npx http-server
# sau
npm install -g http-server
http-server
```

### GitHub Pages (Hosted)

1. **Crează repository** cu nume `username.github.io`
2. **Push-ul codul** în branch `main`
3. **Activează GitHub Pages** în setări (Settings → Pages → Source: main)
4. Acces: `https://username.github.io`

*Alternativ*: Folosă un folder `/docs` în `main` branch

## 🛠️ Arhitectură Tehnică

### Stack

- **HTML5** - Semantic, accessible
- **CSS3** - Grid, Flexbox, variables, dark mode
- **JavaScript ES6+** - Modules, classes, async/await ready
- **localStorage** - Persistență date (offline)

### Arhitectură Modulară

```
┌─────────────────────────────────────┐
│         UI Layer (render.js)        │ ← Afișare
├─────────────────────────────────────┤
│      App Logic (app.js)             │ ← Logică
├─────────────────────────────────────┤
│   QuizEngine + Scorer (core/)       │ ← Business Logic
├─────────────────────────────────────┤
│   Question Bank (data/cpp.js)       │ ← Date
└─────────────────────────────────────┘
```

### Design Pattern

- **MVC-like separation**: Model (QuizEngine), View (render.js), Controller (app.js)
- **Event-driven**: Listeners dinamici pe acțiuni utilizator
- **ES Modules**: `import`/`export` pentru modularitate
- **Singleton pattern**: O instanță App în `window.__APP__`

## 📝 Fluxul Utilizator

1. **Home** - Selectare limbaj (momentan C++)
2. **Quiz** - 10 întrebări random, una câte una
3. **Results** - Scor, procent, feedback, recenzie răspunsuri
4. **Storage** - Salvare automată în localStorage

## 🎨 Design & UX

### Tema

- **Culori**:
  - Primary: Indigo (#6366f1)
  - Secondary: Pink (#ec4899)
  - Success: Green (#10b981)
  - Danger: Red (#ef4444)

- **Tipografie**: System fonts (auto-select pe fiecare sistem)
- **Spacing**: 8px grid
- **Shadows**: Material-style (sm, md, lg)

### Responsive

- Desktop: Layout normal
- Tablet (768px): Grid 2 coloane
- Mobile (480px): Layout stacked, text mai mic

### Accessibility

- Semantic HTML (header, main, footer)
- ARIA labels (future enhancement)
- Keyboard navigation (tab support)
- Contrast ratios WCAG AA

## 🔌 Extensibilitate

### Adăugare Limbaj Nou (ex: Python)

1. **Crează** `src/data/python.js`:

```javascript
export const python = [
    {
        id: 'py_001',
        language: 'Python',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este Python?',
        options: [...],
        correctAnswer: '...',
        explanation: '...'
    },
    // ... 150+ întrebări
];
```

2. **Update** `src/app.js` - Adaugă în `languages` object:

```javascript
import { python } from './data/python.js';

this.languages = {
    'cpp': { ... },
    'python': {
        name: 'Python',
        icon: '🐍',
        description: 'Programare pentru începători',
        data: python
    }
};
```

3. **Gata!** - Limbajul apare automat în meniu

### Adăugare Întrebări Noi

Editează `src/data/cpp.js` și adaugă la array:

```javascript
{
    id: 'cpp_156',
    language: 'C++',
    category: 'Arrays',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Cum..?',
    code: `optional: codul exemplu`,
    options: ['opt1', 'opt2', 'opt3', 'opt4'],
    correctAnswer: 'opt1',
    explanation: 'Explicația...'
}
```

### Backend Integration (Future)

Structura este pregătită pentru API:

1. Crează `src/services/api.js`:

```javascript
export async function fetchQuestions(language) {
    const res = await fetch(`/api/questions?lang=${language}`);
    return res.json();
}
```

2. Update `quizEngine.js` pentru a folosi API în loc de date statice
3. Backend acceptă JSON cu aceeiași structură

## 💾 localStorage

### Structură Salvare

```javascript
{
    quizHistory: [
        {
            score: 8,
            percentage: 80,
            language: 'cpp',
            timestamp: '2025-05-21T...',
            questions: [...],
            userAnswers: [...]
        }
    ],
    theme: 'dark' // sau 'light'
}
```

## 🧪 Testare

### Manual Testing

- [ ] Home page loads
- [ ] Select language works
- [ ] Quiz generates 10 questions
- [ ] Questions don't repeat
- [ ] Answers validate correctly
- [ ] Results show correct scor
- [ ] Dark mode toggles
- [ ] Mobile responsive
- [ ] localStorage saves/loads

### Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ⚠️ IE 11 (nu suportat)

## 📊 Statistici Conținut

| Categorie | Întrebări | Greutate |
|-----------|-----------|----------|
| Basics | 20 | easy |
| Variables | 15 | easy |
| Operators | 20 | easy |
| If/Else | 20 | easy |
| Loops | 30 | easy-medium |
| Arrays | 50+ | easy-medium |
| **Total** | **155+** | |

## 🐛 Known Issues & TODO

### Current

- [x] Design complet
- [x] Quiz engine funcțional
- [x] 155 întrebări C++
- [x] localStorage
- [x] Dark mode

### TODO (Next Versions)

- [ ] Python, Java, JavaScript, C# content
- [ ] User authentication (Firebase)
- [ ] Leaderboard
- [ ] Certificate generation
- [ ] PDF export results
- [ ] Teacher dashboard
- [ ] Custom quiz creation

## 📖 Cum Să Citești Codul

### Entry Point

1. `index.html` - Pagina HTML
2. `src/main.js` - Inițializează App
3. `src/app.js` - Logica principală
4. `src/core/quizEngine.js` - Core logic

### Datele

- `src/data/cpp.js` - Întrebări (deschide și citește)

### UI

- `src/ui/render.js` - Funcții render
- `src/ui/components.js` - Componente mici
- `style.css` - Toate stilurile

## 📞 Support

Pentru buguri sau sugestii:
1. Deschide issue în GitHub
2. Descrie problema / feature-ul dorit
3. Include screenshot dacă e relevant

## 📄 Licență

MIT License - Liber pentru utilizare educațională și comercială

## 👨‍💻 Autor

Creat cu ❤️ pentru educația copiilor în programare.

---

**Happy Learning! 🚀**

