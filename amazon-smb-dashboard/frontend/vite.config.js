import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },

  base: process.env.BASE_URL || '/', 
  server: {
    port: 3000, 
    open: true, 
  },
});