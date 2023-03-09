import routes from "./routes/routes.js";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes, // 定义好的路由配置
})

export default router