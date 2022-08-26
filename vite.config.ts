import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './example',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './example/src'),
      component: path.resolve(__dirname, './src/components')
    }
  }
})
