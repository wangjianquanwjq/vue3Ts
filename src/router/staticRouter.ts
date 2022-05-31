const staticRouter = [
    {
        path: '/',
        name: "log",
        component: () => import('../view/login/index.vue'),
        redirect: { name: 'login', path: "/login" },
        children: [
            {
                path: '/login',
                name: "login",
                component: () => import('../view/login/index.vue'),
            },
        ]
    },
]
export default staticRouter