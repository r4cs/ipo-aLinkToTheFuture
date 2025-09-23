// !!! PROD !!!
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
    emptyOutDir: true // ✅ Limpa a pasta dist antes de buildar
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './assets')
    }
  },
  // ✅ Configuração importante para a Vercel
  base: './' // Usa caminhos relativos
});