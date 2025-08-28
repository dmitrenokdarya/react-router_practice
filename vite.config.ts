import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-router_practice/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
