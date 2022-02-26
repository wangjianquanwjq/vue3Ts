import { createRouter, createWebHistory } from "vue-router";
import Table from '../view/table/index.vue';
import From from '../view/table/index.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Table,
        }, {
            path: '/from',
            component: From,
        }
    ]
})
export default router;  