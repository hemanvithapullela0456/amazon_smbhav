import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure Vite builds into 'frontend/dist'
  },
  base: '/', // Set base to '/' unless deploying to a subpath
  server: {
    port: 3000,
    open: true
  }
});
