import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { VitePWA } from 'vite-plugin-pwa';

import fs from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'service-worker': ['sw.js'],
        },
      },
    },
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    {
      name: 'manifest-json',
      writeBundle() {
        // Definir la función loadFileContent dentro de writeBundle
        function loadFileContent(filePath) {
          return fs.readFileSync(filePath, 'utf-8');
        }

        this.emitFile({
          type: 'asset',
          fileName: 'manifest.json',
          source: loadFileContent('manifest.json'),
        });
      },
    },
    {
      name: 'service-worker',
      writeBundle() {
        // Definir la función loadFileContent dentro de writeBundle
        function loadFileContent(filePath) {
          return fs.readFileSync(filePath, 'utf-8');
        }

        this.emitFile({
          type: 'asset',
          fileName: 'sw.js',
          source: loadFileContent('sw.js'),
        });
      },
    },
    VitePWA(),
  ],
});