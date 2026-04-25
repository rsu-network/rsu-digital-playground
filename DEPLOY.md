# RSU Network Website – GitHub Pages Deployment

Diese Anleitung erklärt, wie du die RSU Network Website auf GitHub Pages veröffentlichen kannst.

## Voraussetzungen

- Ein GitHub-Konto
- Git auf deinem Computer installiert

## Schritt 1: Repository erstellen

1. Gehe zu [GitHub](https://github.com) und melde dich an
2. Klicke auf das **+** Symbol oben rechts → **New repository**
3. Gib deinem Repository einen Namen (z.B. `rsu-network-website`)
4. Wähle **Public** (damit GitHub Pages funktioniert)
5. Klicke auf **Create repository**

## Schritt 2: Dateien hochladen

### Option A: Über die GitHub Website (einfach)

1. Öffne dein neues Repository auf GitHub
2. Klicke auf **Add file** → **Upload files**
3. Lade den gesamten Inhalt des `dist`-Ordners hoch (siehe Schritt 3)

### Option B: Über Git (empfohlen)

```bash
# Lokalen Ordner erstellen
mkdir rsu-network-website
cd rsu-network-website

# Git initialisieren
git init

# Remote Repository verbinden
git remote add origin https://github.com/DEIN_USERNAME/rsu-network-website.git

# Alle Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit"

# Auf GitHub pushen
git push -u origin main
```

## Schritt 3: Build erstellen

Bevor du die Website hochlädst, musst du einen Build erstellen:

```bash
# Im Projektordner
npm install
npm run build
```

Dies erstellt einen `dist`-Ordner mit allen Dateien, die du brauchst.

## Schritt 4: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (oben rechts)
3. Wähle im linken Menü **Pages**
4. Unter **Source** wähle **Deploy from a branch**
5. Wähle den **main** Branch und den **/(root)** Ordner
6. Klicke auf **Save**

Nach einigen Minuten ist deine Website unter `https://DEIN_USERNAME.github.io/rsu-network-website` verfügbar!

## Automatisches Deployment mit GitHub Actions (optional)

Wenn du bei jedem Push automatisch deployen möchtest, erstelle eine Datei `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Wichtige Hinweise

- Die Website verwendet **HashRouter** statt BrowserRouter, damit das Routing auf GitHub Pages funktioniert
- Alle Links werden automatisch mit `#` prefixiert (z.B. `/#/plugins`)
- Die 404.html ist konfiguriert, um alle Anfragen an die App weiterzuleiten

## Support

Bei Fragen oder Problemen:
1. Prüfe die [GitHub Pages Dokumentation](https://docs.github.com/pages)
2. Schau in die Browser-Konsole auf Fehler
3. Vergewissere dich, dass alle Dateien im `dist`-Ordner sind
