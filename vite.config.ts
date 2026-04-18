import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// `vite` / `vite dev` boots the playground under ./playground.
// `vite build` keeps the library build untouched.
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: resolve(__dirname, 'playground'),
      server: {
        port: 5173,
        open: true,
      },
    };
  }

  return {
    plugins: [react()],
    build: {
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
  };
});
