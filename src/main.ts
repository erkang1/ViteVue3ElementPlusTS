import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './http'
import './style/reset.css' //全局引入取消浏览器默认样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//全局挂载axios
app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
