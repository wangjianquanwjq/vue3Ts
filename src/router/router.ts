import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "table",
            component: () => import('../view/table/index.vue'),
        }, {
            path: '/from',
            name: "from",
            component: () => import('../view/from/index.vue'),
        }, {
            path: '/typeScript',
            name: "typeScript",
            component: () => import('../view/typeScript/index.vue'),
        }, {
            path: '/vueThree',
            name: "vueThree",
            component: () => import('../view/vueThree/index.vue'),
        }
    ]
})
export default router;  