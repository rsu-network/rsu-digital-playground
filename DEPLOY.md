# RSU Network – Deployment

## Option A: Netlify Drag & Drop (einfachster Weg)

1. **Build erstellen** (lokal im Projekt-Ordner):
   ```bash
   npm install
   npm run build
   ```
2. Im Projekt entsteht ein Ordner `dist/`.
3. Gehe auf <https://app.netlify.com/drop>.
4. Ziehe den **kompletten `dist/`-Ordner** ins Browser-Fenster.
5. Fertig – Netlify zeigt dir eine URL wie `https://random-name.netlify.app`.

> Die Datei `_redirects` (im `dist/`-Ordner nach dem Build) sorgt dafür, dass
> Deep Links wie `/plugins` auch beim Refresh funktionieren.

## Option B: Netlify mit GitHub verbinden (Auto-Deploy)

1. Repo auf GitHub pushen.
2. Auf <https://app.netlify.com> → **Add new site → Import from Git**.
3. Repo auswählen. Build-Settings werden aus `netlify.toml` gelesen:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy site** klicken. Jeder Push auf `main` deployed automatisch neu.

## Custom Domain

In Netlify: **Site settings → Domain management → Add custom domain**
(z. B. `rsu-network.de`). Netlify generiert automatisch ein SSL-Zertifikat.
