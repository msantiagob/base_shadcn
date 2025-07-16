import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html'; // Correct import

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        injectData: {
          script: { crossorigin: false },
          link: { crossorigin: false },
        },
      },
    }),
  ],
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
