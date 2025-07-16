import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8'
    }
  }
})
