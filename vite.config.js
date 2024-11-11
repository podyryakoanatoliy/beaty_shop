import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        // Вказуємо явну точку входу
        input: glob.sync('./src/*.html'), // Якщо ви використовуєте декілька HTML файлів як точки входу

        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'; // Розділення залежностей в окремий чанк
            }
          },
          entryFileNames: 'commonHelpers.js', // Назва головного бандла
        },
      },
      outDir: '../dist', // Вихідний каталог
    },
    plugins: [
      injectHTML(), // Плагін для інжекції HTML
      FullReload(['./src/**/**.html']), // Плагін для перезавантаження при зміні HTML
    ],
    optimizeDeps: {
      include: ['axios', 'swiper'], // Включаємо залежності для передзбірки
    },
  };
});
