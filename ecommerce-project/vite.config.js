import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { // this is server proxy configuration 
      '/api': { // any request that starts with /api make target  
        target: 'http://localhost:3000'
      }, 
      '/images': {
        target: 'http://localhost:3000'
      }
    }
  }
})
