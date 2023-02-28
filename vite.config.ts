/* eslint-disable import/default */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import sass from 'sass';

interface EslintType {
  cache: boolean;
  fix: boolean;
}

const configLint: EslintType = {
  cache: false,
  fix: true,
};

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(configLint),
    {
      name: 'scss',
      transform: (code: string, id: string) => {
        if (/\.scss$/.test(id)) {
          const result = sass.renderSync({ data: code });
          return {
            code: result.css.toString(),
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/config/constants'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
