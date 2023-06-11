import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1/accounts': {
        target: 'https://identitytoolkit.googleapis.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  },
  resolve: {
    alias: {
      'src/data.json': './components/data.json',
    },
  },
});