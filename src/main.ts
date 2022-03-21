import { createApp } from 'vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// createApp(App).use(router).use(ElementPlus).mount('#app')
createApp(App).use(router).mount('#app')
