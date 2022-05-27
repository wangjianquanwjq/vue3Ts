import { createApp } from 'vue'
import router from './router/router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import Particles from 'particles.vue3'
// createApp(App).use(router).use(ElementPlus).mount('#app')
createApp(App).use(router).use(Particles).mount('#app')
