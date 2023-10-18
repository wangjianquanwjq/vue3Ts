import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import staticRouter from './staticRouter'
import MainRouter from './mainRouter'
//基础路由
// const routes: Array<RouteRecordRaw> = [
//     {
//         path: '/',
//         name: "log",
//         component: () => import('../view/login/index.vue'),
//         redirect: { name: 'login', path: "/login" },
//         children: [
//             {
//                 path: '/login',
//                 name: "login",
//                 component: () => import('../view/login/index.vue'),
//             },
//         ]
//     },
//     {
//         path: '/home',
//         name: "home",
//         component: () => import('../layouts/index.vue'),
//         redirect: { name: 'table', path: "/table" },
//         children: [
//             {
//                 path: '/table',
//                 name: "table",
//                 component: () => import('../view/table/index.vue'),
//             }, {
//                 path: '/from',
//                 name: "from",
//                 component: () => import('../view/from/index.vue'),
//             }, {
//                 path: '/typeScript',
//                 name: "typeScript",
//                 component: () => import('../view/typeScript/index.vue'),
//             }, {
//                 path: '/vueThree',
//                 name: "vueThree",
//                 component: () => import('../view/vueThree/index.vue'),
//             }
//         ]
//     },

// ]
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...staticRouter,  //注册静态路由
        ...MainRouter //注册动态路由入住路由  
    ]
})
router.beforeEach(async (to, from, next) => {
    let token = sessionStorage.getItem('userInfo')
    if (token == null && to.fullPath != "/login") {
        next('/login')
    } else {
        next()
    }
    next()
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
//         }import router from './router';

//     ]
// })
// export default router;  