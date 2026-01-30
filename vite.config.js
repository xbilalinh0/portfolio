import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. AÑADIMOS LA BASE: Sin esto, GitHub no encontrará los archivos .js y .css
  base: '/portfolio/', 
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // 2. CAMBIAMOS TERSER POR ESBUILD: Para evitar el error que tuviste antes en Vercel
    // a menos que hayas instalado terser con 'npm install -D terser'
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
        }
      }
    }
  }
})