import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const port = Number(process.env.PORT) || 5173
const apiDevPort = Number(process.env.VERCEL_API_PORT) || 3001

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port,
    strictPort: true,
    open: !process.env.VERCEL,
    // Proxy /api to `npm run dev:api` (vercel dev on port 3001, no SPA rewrites).
    proxy: {
      '/api': `http://localhost:${apiDevPort}`,
    },
  },
  preview: {
    host: 'localhost',
    port: 4173,
    open: true,
  },
})
