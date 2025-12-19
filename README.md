# gtttools — README (Hindi)

## Overview
**gtttools** ek free, open-source collection hai jo **200 tools** provide karta hai — **100 Normal tools** + **100 AI-style helper tools**.
Ye project GitHub Pages par static hosting ke liye banaya gaya hai (koi backend/paid API nahi).
Sab tools client-side (browser) me chalenge ya template-driven "AI" helpers honge.

---

## Kya milta hai is repo me (deliverable)
1. `index.html` — Homepage + search + category list (yehi file aapko mil rahi hai).
2. `data/tools.json` — 200 tools ki metadata file (alags se).
3. `README.md` — deploy instructions, structure aur next steps.

---

## Kaise deploy karein (GitHub Pages)
1. Naya repo banayein GitHub pe: `USERNAME/gtttools`
2. Local machine pe clone karein ya seedha ye files upload karein.
3. Commit & push:
```bash
git init
git add .
git commit -m "Add gtttools homepage and tools.json"
git branch -M main
git remote add origin https://github.com/USERNAME/gtttools.git
git push -u origin main
```
4. GitHub repo → Settings → Pages → Source select karein `main` branch / root
5. Thodi der me site live ho jaayegi: `https://username.github.io/gtttools/`

---

## Folder / File structure (recommended)
```
gtttools/
├── index.html
├── tools/                # individual tool pages (tools will be added later)
├── assets/
│   ├── css/
│   └── js/
├── data/
│   └── tools.json
├── README.md
└── sitemap.xml
```

---

## Kaam karne ka tarika (adding tools)
- Har tool ke liye ek simple static HTML page banao under `tools/<category>/<slug>.html`.
- Tool page me same header/footer include karo (ya simple JS include).
- SEO friendly `<title>` aur `<meta>` dalna mat bhoolna.

---

## Agle steps (suggested)
1. `index.html` ko repo me upload karo (already included).
2. Main tools pages ka skeleton bana dunga — 200 pages ke liye templates generate kar sakta hoon.
3. Agar chaho to main `tools.json` me changes kar doon jise CMS ya scripts se update kar sakte ho.

---

## 200 Tools (Short overview)
- **100 Normal tools**: Text (20), Image (15), SEO (15), Dev (15), Calculators (10), Utilities (25)
- **100 AI-style tools**: AI Text (30), AI Image prompts (20), AI Code helpers (15), AI Marketing (15), AI Utility (20)

---

## Licence
MIT — Free to use, modify and distribute.

---

## Contact
Agar chaho main seedha repo ka full zip bana ke de dun (jaise abhi), ya 20 tool pages ka skeleton generate kar dun.
