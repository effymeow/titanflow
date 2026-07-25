import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/titanflow/', // 👈 ВАЖНО! Название репозитория
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://titanflow-backend.onrender.com', // Бэкенд на Render
        changeOrigin: true,
      },
      '/ws': {
        target: 'wss://titanflow-backend.onrender.com',
        ws: true,
      },
    },
  },
});