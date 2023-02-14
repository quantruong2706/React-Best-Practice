import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  
      '@apis': path.resolve(__dirname, './src/apis'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/config/constants'),
      '@types-actions': path.resolve(__dirname, './src/config/types'),
      '@config': path.resolve(__dirname, './src/config'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@selectors': path.resolve(__dirname, './src/selectors'),
      '@middlewares': path.resolve(__dirname, './src/middlewares'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
