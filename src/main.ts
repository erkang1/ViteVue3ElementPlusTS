import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './http'
import './style/reset.css' //全局引入取消浏览器默认样式

const app = createApp(App)

//全局挂载axios
app.config.globalProperties.$axios = axios

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
