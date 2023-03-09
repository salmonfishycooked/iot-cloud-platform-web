import { createApp } from 'vue'
import './style.css' // 引入全局样式
import App from './App.vue'
import router from "./router/router.js";

const app = createApp(App) // 创建 App.vue 实例

app.use(router) // 引入路由

app.mount('#app')
