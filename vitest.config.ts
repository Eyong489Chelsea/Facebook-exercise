/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,           // use describe(), it(), expect() globally
    environment: 'jsdom',    // DOM environment for Vue components
    setupFiles: './tests/setup.js', // optional, for i18n or global setup
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
