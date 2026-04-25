# 🚀 RSU Network – Deployment auf GitHub Pages

## ⚠️ Wichtig: Du darfst NICHT die Quelldateien hochladen!

GitHub Pages kann React/TypeScript nicht ausführen. Du musst zuerst einen **Build** erstellen.

---

## ✅ Empfohlene Methode: Automatisches Deployment

### Schritt 1: Repository erstellen & Code hochladen

1. Erstelle ein neues Repository auf GitHub (z.B. `rsu-digital-playground`)
2. Lade den **gesamten Projekt-Code** hoch (alle Dateien aus dem Lovable-Editor – inklusive `package.json`, `src/`, `.github/`, etc.)

```bash
git clone https://github.com/DEIN_USERNAME/REPO_NAME.git
# Kopiere alle Lovable-Projektdateien hinein
git add .
git commit -m "Initial commit"
git push
```

### Schritt 2: GitHub Pages aktivieren

1. Gehe zu **Settings** → **Pages**
2. Unter **Source** wähle: **GitHub Actions** (NICHT "Deploy from a branch"!)
3. Speichern

### Schritt 3: Warten

Der Workflow `.github/workflows/deploy.yml` baut die Website automatisch und stellt sie bereit. Nach 1-2 Minuten ist sie live unter:

```
https://DEIN_USERNAME.github.io/REPO_NAME/
```

Bei jedem `git push` wird die Website automatisch neu gebaut. ✨

---

## 🔧 Manuelle Methode (falls du keine Actions verwenden willst)

### Schritt 1: Lokal bauen

```bash
npm install
npm run build
```

Es entsteht ein `dist/`-Ordner.

### Schritt 2: Nur den `dist`-Inhalt hochladen

Lade **nur den Inhalt** des `dist/`-Ordners (NICHT den Ordner selbst) ins Repository hoch.

### Schritt 3: GitHub Pages aktivieren

1. Settings → Pages
2. Source: **Deploy from a branch** → `main` → `/(root)`

---

## 🐛 Fehlerbehebung

**404 für `/src/main.tsx`:**
→ Du hast die Quelldateien hochgeladen statt `dist/`. Siehe oben.

**404 für `/rsu-logo.svg`:**
→ Gleiches Problem – die Build-Dateien fehlen.

**Weiße Seite:**
→ Der `base`-Pfad in `vite.config.ts` steht auf `"./"` (relativ), das sollte funktionieren.

**Routen funktionieren nicht:**
→ Wir nutzen `HashRouter`, die URLs sehen aus wie `/#/plugins`. Das ist korrekt.
