import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/leaflet-simple-toolbar.js'),
      name: 'leaflet-simple-toolbar',
      filename: 'leaflet-simple-toolbar',
    }
  }
})
