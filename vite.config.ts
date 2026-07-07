import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' => works on GitHub Pages project sites and user sites alike
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (/three|@react-three/.test(id)) return 'three'
            if (/gsap|lenis|framer-motion|motion/.test(id)) return 'motion'
            return 'vendor'
          }
        },
      },
    },
  },
})
