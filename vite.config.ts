import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const port = Number(process.env.PORT) || 5173

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port,
    strictPort: true,
    open: !process.env.VERCEL,
  },
  preview: {
    host: 'localhost',
    port: 4173,
    open: true,
  },
})
