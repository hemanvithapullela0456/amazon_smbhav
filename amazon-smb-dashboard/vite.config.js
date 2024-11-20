import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
  },
  // Use base for GitHub Pages or any specific subdirectory hosting
  base: process.env.BASE_URL || '/', // Dynamically set base URL for flexibility
  server: {
    port: 3000, // Local development server port (optional)
    open: true, // Automatically open browser during development (optional)
  },
});
