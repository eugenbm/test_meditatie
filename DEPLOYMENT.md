# 🚀 Ghid Deploy CodeQuiz pe GitHub Pages

## Opțiunea 1: GitHub Pages Direct (Recomandată)

### Pași:

1. **Crează repository nou** pe GitHub:
   - Merge la github.com și click **New**
   - Nume: `test_meditatie` (sau altceva)
   - Descriere: "Platformă de teste de programare"
   - **Public** (important pentru Pages)
   - Click **Create repository**

2. **Push-ul codului**:

```bash
# Din directorul test_meditatie
git init
git add .
git commit -m "Initial commit: CodeQuiz v1.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/test_meditatie.git
git push -u origin main
```

3. **Activează GitHub Pages**:
   - Repository → Settings (roată) → Pages (din meniu stânga)
   - **Source**: Branch → `main` / root folder
   - Click **Save**
   - Asteaptă 1-2 minute
   - Site disponibil la: `https://your-username.github.io/test_meditatie/`

## Opțiunea 2: GitHub Pages cu /docs Folder

Util dacă vrei să menții și alte fișiere în main:

1. **Crează folder `/docs`** și copiază toate fișierele acolo
2. Settings → Pages → Source: `main` / `/docs` folder
3. Site: `https://your-username.github.io/test_meditatie/`

## Opțiunea 3: Deploy cu Netlify (Alternativă)

### Gratis și mai ușor de configurat:

1. Merge la [netlify.com](https://netlify.com)
2. Click **Sign up** → conectează GitHub
3. Click **New site from Git** → selectează repository
4. Deploy settings:
   - Build command: (gol - static)
   - Publish directory: `.` (root)
5. Click **Deploy**
6. Site generat automat: `https://your-random-name.netlify.app`

## Opțiunea 4: Deploy cu Vercel

Similar Netlify:

1. Merge [vercel.com](https://vercel.com)
2. Click **Import Project**
3. Selectează repo GitHub
4. Deploy automat
5. Site: `https://your-project.vercel.app`

---

## ✅ Verificare Post-Deploy

După deploy, verifica:

1. ✅ Site se încarcă
2. ✅ Poți selecta limbaj
3. ✅ Poți porni un test
4. ✅ Dark mode merge
5. ✅ Răspunsurile se validează
6. ✅ localStorage salvează (în DevTools)
7. ✅ Mobile responsive (F12 → Device Toggle)

## 🔄 Updates Viitoare

Sunt automatic cu git:

```bash
# Update local
nano README.md  # faci schimbări

# Push pe GitHub
git add .
git commit -m "Update: added X"
git push
```

GitHub Pages se reîncarc automat în 1-2 minute.

## 📊 Analytics (Optional)

Adaugă Google Analytics:

```html
<!-- Adaugă în <head> din index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` cu track ID din Google Analytics.

## 🆘 Troubleshooting

### Site nu apare

- [ ] Repo public (Settings → Visibility)
- [ ] Pages enabled (Settings → Pages)
- [ ] Branch `main` selectat
- [ ] Asteaptă 2-5 minute după push

### CSS/JS nu se încarcă

- [ ] Verifica console (F12 → Console)
- [ ] Paths sunt relative: `src/main.js` (nu `/src/main.js`)
- [ ] `.nojekyll` file exists în root

### localStorage nu merge

- [ ] Browserul blochează? Acceptă cookies
- [ ] Testează în Chrome DevTools
- [ ] Verifica Privacy settings

---

**Gata! Site-ul tău e live! 🎉**

