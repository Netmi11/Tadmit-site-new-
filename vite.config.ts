import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev, rewrite /guides/{slug}/ to /guides/{slug}/index.html
// so Vite serves the static landing page from public/.
const guidesDevMiddleware = () => ({
  name: 'guides-dev-middleware',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url && req.url.startsWith('/guides/') && req.url.endsWith('/')) {
        const candidate = path.join(__dirname, 'public', req.url, 'index.html');
        if (fs.existsSync(candidate)) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          fs.createReadStream(candidate).pipe(res);
          return;
        }
      }
      next();
    });
  },
});

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [guidesDevMiddleware(), react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'framer-motion': ['framer-motion'],
              'ogl': ['ogl'],
            }
          }
        }
      }
    };
});
