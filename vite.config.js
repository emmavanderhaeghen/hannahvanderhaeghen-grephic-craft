import ViteRestart from 'vite-plugin-restart';
import legacy from '@vitejs/plugin-legacy'
import { loadEnv } from 'vite';

export default ({ command }) => {
  Object.assign(process.env, loadEnv(command, process.cwd())); // eslint-disable-line no-undef

  return {
    base: command === 'serve' ? '' : '/dist/',
    build: {
      manifest: true,
      outDir: './web/dist',
      rollupOptions: {
        input: {
          app: './src/scripts/app.js'
        }
      }
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      ViteRestart({
        reload: [
            './templates/**/*',
            './src/web/**/*'
        ],
      }),
      {
        name: 'static-asset-fixer',
        enforce: 'post',
        apply: 'serve',
        transform: (code) => {
          return {
            code: code.replace(/\/src\/(.*)\.(svg|jp?g|png|webp)/g, `${process.env.VITE_PRIMARY_SITE_URL}/src/$1.$2`), // eslint-disable-line no-undef
            map: null,
          }
        },
      }
    ],
    publicDir: './src/web',
    assetsDir: 'bundle',
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  };
};
