import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    server: {
        hmr: {
            port: 443,
        }
    },
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/lib/components'),
    },
  },
})
