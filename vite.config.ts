import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  server: {
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
})
