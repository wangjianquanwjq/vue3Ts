import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//基础路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "login",
        component: () => import('../view/login/index.vue'),
    },
    {
        path: '/home',
        name: "home",
        component: () => import('../layouts/index.vue'),
        children: [
            {
                path: '/table',
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
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: '/',
//             name: "login",
//             component: () => import('../view/login/index.vue'),
//         },
//         {
//             path: '/table',
//             name: "table",
//             component: () => import('../view/table/index.vue'),
//         }, {
//             path: '/from',
//             name: "from",
//             component: () => import('../view/from/index.vue'),
//         }, {
//             path: '/typeScript',
//             name: "typeScript",
//             component: () => import('../view/typeScript/index.vue'),
//         }, {
//             path: '/vueThree',
//             name: "vueThree",
//             component: () => import('../view/vueThree/index.vue'),
//         }
//     ]
// })
// export default router;  