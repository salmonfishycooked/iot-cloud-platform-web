// 定义路由，每个路由都需要映射到一个组件
const routes = [
    { path: '/', component: () => import('../../pages/index/Index.vue') },
]

export default routes