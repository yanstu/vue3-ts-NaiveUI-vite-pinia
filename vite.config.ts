import vue from '@vitejs/plugin-vue';
import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import viteCompression from 'vite-plugin-compression';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: [
      vue(),
      // vue script 扩展
      VueSetupExtend(),
      AutoImport({
        imports: ['vue'], // 自动导入vue相关函数
        dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      // 压缩
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    resolve: {
      // 配置别名
      alias: {
        '@': resolve('src'),
      },
    },
    /*server: {
      host: true,
      proxy: {
        '/api': {
          target: env.VITE_PROXY_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },*/
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 发布时删除 console
          // drop_console: true,
        },
      },
    },
  };
};
