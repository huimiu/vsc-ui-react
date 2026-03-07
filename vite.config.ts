import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VscUiReact',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@fluentui/react-components',
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
