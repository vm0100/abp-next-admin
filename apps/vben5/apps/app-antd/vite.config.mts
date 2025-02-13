import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/.well-known': {
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://127.0.0.1:30001/',
            ws: true,
          },
          '/api': {
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://127.0.0.1:30001/',
            ws: true,
          },
          '/connect': {
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://127.0.0.1:30001/',
            ws: true,
          },
        },
      },
    },
  };
});
