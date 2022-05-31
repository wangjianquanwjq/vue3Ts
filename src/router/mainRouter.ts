const MainRouter = [
    {
        path: '/home',
        name: "home",
        component: () => import('../layouts/index.vue'),
        redirect: { name: 'table', path: "/table" },
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
export default MainRouter