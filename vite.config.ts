import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    WindiCSS(),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
          importStyle: 'less',
          resolveIcons: true,
        }),
      ],
    }),
    Components({
      dirs: [],
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
          importStyle: 'less',
          resolveIcons: true,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
