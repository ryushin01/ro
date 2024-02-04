import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ro',
  // vite에서 svg를 사용하기 위한 세팅
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@modules', replacement: '/src/modules' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@images', replacement: '/src/assets/images' },
    ],
  },
});
