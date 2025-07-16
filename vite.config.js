import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
});
