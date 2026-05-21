# 🚀 CodeQuiz - Quick Start Guide

## ⏱️ 5 Minute To Get Started

### Step 1: Testează Local (1 min)

**Option A: VS Code + Live Server**
1. Open folder în VS Code: `File → Open Folder → test_meditatie`
2. Right-click pe `index.html`
3. Select **Open with Live Server**
4. Browser deschide automat

**Option B: Terminal (Python)**
```bash
cd test_meditatie
python -m http.server 8000
# Visit: http://localhost:8000
```

**Option C: Terminal (Node.js)**
```bash
npx http-server
# Visit: http://localhost:8080
```

### Step 2: Test Aplicația (2 min)

- [ ] Home page loads (logo, welcome, language cards)
- [ ] Click "C++" card
- [ ] Quiz loads (progress bar, question, answer options)
- [ ] Select an answer (auto-advances)
- [ ] Answer 10 questions
- [ ] View results (score, feedback, review)
- [ ] Click "New Test" (new 10 questions)
- [ ] Toggle dark mode (moon/sun button)

### Step 3: Deploy (2 min)

**GitHub Pages (Recommended)**

1. Create repo: `https://github.com/new`
   - Name: `test_meditatie`
   - Public: Yes
   - Create

2. Push code:
```bash
cd test_meditatie
git add .
git commit -m "Initial CodeQuiz release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/test_meditatie.git
git push -u origin main
```

3. Enable Pages:
   - Go to repo Settings (⚙️)
   - Scroll to "Pages"
   - Source: Branch → `main` / root folder
   - Save
   - Wait 1-2 minutes
   - Site live at: `https://your-username.github.io/test_meditatie/`

✅ **Done!** Share the link!

---

## 🎯 What's Included

### Code (7 Files)
- `src/main.js` - Startup
- `src/app.js` - Main logic
- `src/core/quizEngine.js` - Quiz generation
- `src/core/scorer.js` - Scoring system
- `src/ui/render.js` - Page rendering
- `src/ui/components.js` - UI components
- `src/data/cpp.js` - 155 C++ questions

### Styling & Config
- `index.html` - Single page HTML
- `style.css` - All styles (responsive + dark mode)
- `manifest.json` - PWA config
- `package.json` - npm info

### Documentation
- `README.md` - Full guide
- `DEPLOYMENT.md` - Deploy instructions
- `EXTENSIBILITY.md` - How to add features
- `PROJECT_SUMMARY.md` - Technical overview

---

## 📊 Questions Coverage

### C++ (155 Questions)

| Topic | Count | Level |
|-------|-------|-------|
| Basics | 20 | Easy |
| Variables | 15 | Easy |
| Operators | 20 | Easy |
| If/Else | 20 | Easy |
| Loops | 30 | Easy-Med |
| **Arrays & Vectors** | **50+** | **Easy-Med** |

Each test = random 10 questions from the full bank

---

## ✨ Features

✅ **Quiz System**
- Random question selection
- 5 question types (multiple choice, true/false, text, code, trace)
- Instant answer validation
- Automatic scoring

✅ **User Interface**
- Modern, educational design
- Responsive (mobile, tablet, desktop)
- Dark mode toggle
- Progress bar
- Animated transitions

✅ **Data**
- Auto-saves to localStorage
- Quiz history
- Statistics tracking

---

## 🔧 Next Steps

### Customize
- Change colors in `style.css` (`:root` variables)
- Modify questions in `src/data/cpp.js`
- Update header/footer in `src/app.js`

### Extend
- Add Python language: Follow `EXTENSIBILITY.md`
- Add new questions: Update `cpp.js`
- Add features: Check `TODO` in `PROJECT_SUMMARY.md`

### Share
- Send GitHub Pages link to students
- Works on all devices (no installation needed)
- Offline works after first load

---

## 🆘 Troubleshooting

### Page doesn't load
- [ ] Check browser console (F12 → Console)
- [ ] Verify you're using modern browser (Chrome, Firefox, Safari)
- [ ] Clear cache (Ctrl+Shift+Delete)

### Questions don't show
- [ ] Check console for errors
- [ ] Verify `cpp.js` exports correctly
- [ ] Reload page

### Dark mode doesn't save
- [ ] Check localStorage enabled (browser Settings)
- [ ] Verify `localStorage.setItem()` works in console
- [ ] Try incognito mode

### GitHub Pages not working
- [ ] Verify repo is Public
- [ ] Check branch is `main`
- [ ] Wait 2-5 minutes for build
- [ ] Check Pages settings (Settings → Pages)

---

## 📱 Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 14+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| Mobile Safari | ✅ Full support |
| Chrome Mobile | ✅ Full support |

---

## 💡 Tips

1. **Each Quiz is Different** - Random 10 from 155 questions each time
2. **localStorage Unlimited** - Saves all quiz history locally
3. **Offline Access** - Works fully offline after first load
4. **No Backend Needed** - 100% static, GitHub Pages ready
5. **Easy to Extend** - Add languages/questions without coding skills

---

## 📞 Need Help?

- Read `README.md` for full documentation
- Check `DEPLOYMENT.md` for deploy questions
- See `EXTENSIBILITY.md` for adding features
- Review `PROJECT_SUMMARY.md` for technical details

---

## 🎓 Usage Tips for Teachers

1. **Share Link**: Send GitHub Pages URL to students
2. **Monitor**: Check localStorage data from students
3. **Customize**: Update questions in `cpp.js` for your curriculum
4. **Track**: Quiz history saved locally per device

---

**Happy Learning! 🚀**

