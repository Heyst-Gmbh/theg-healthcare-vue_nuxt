import { createServer } from 'http';
import { loadNuxt, build } from 'nuxt';

// Starte den Node.js-Server
async function start() {
    const isDev = process.env.NODE_ENV !== 'production';

    // Lade die Nuxt-Konfiguration
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start');

    // Baue die Nuxt-Anwendung im Entwicklungsmodus
    if (isDev) {
        build(nuxt);
    }

    // Erstelle einen HTTP-Server
    const server = createServer((req, res) => {
        nuxt.render(req, res);
    });

    // Starte den Server auf Port 3000
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log(`Server läuft unter http://localhost:${port}`);
    });
}

start();
