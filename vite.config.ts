import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

import {fileURLToPath, URL} from 'url';

export default defineConfig({
  plugins: [
      vue(),
      VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        additionalData: `
          @use "@/styles/vars.scss" as *;
        `
      }
    }
  }
})
