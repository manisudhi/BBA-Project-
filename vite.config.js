import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/BBA-Project-/',
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
});
