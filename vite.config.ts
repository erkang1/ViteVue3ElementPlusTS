import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  base:"/ViteVue3ElementPlusTS/",
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

  // 取消 打包警告 块的大小超过限制  、文件分别存放
  build: {
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  }
})
