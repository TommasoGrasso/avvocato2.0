import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    // Chunking ottimizzato: separa vendor da app code
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },

  // Ottimizzazione asset
  assetsInclude: ['**/*.webp', '**/*.woff2'],
});
