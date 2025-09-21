// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html') // ✅ ESPECIFICA O INDEX.HTML
      }
    }
  },
  server: {
    port: 3000,
    open: '/public/index.html',
    // open: true,
    host: true // Permite acesso externo
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './assets')
    }
  }
});