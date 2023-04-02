import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import googleFonts from 'google-fonts-webpack-plugin';

export default defineConfig({
  plugins: [react(),
    googleFonts({
      fonts: [
        { family: 'Mulish', variants: ['400', '500', '600'] }
      ]
    })
],
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'google-fonts': ['google-fonts']
      }
    }
  }
}
})
