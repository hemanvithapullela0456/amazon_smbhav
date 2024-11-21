import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'frontend/dist', // Set the output directory inside 'frontend'
    sourcemap: true,
  },

  server: {
    open: true,
    port: 3000,
  },
});
