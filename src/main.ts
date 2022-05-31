import { createApp } from 'vue'
import router from './router/router'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Particles from 'particles.vue3'
import debounce from './utils/directive/debounce'
/**
 * 引入自定义的mockXHR
 * 因为mockXHR不是默认导出的：export default{}
 * 所以引入时需要加大括号，这种可以引入多个
 */
import { mockXHR } from "./mock/index";
// 判断开发环境
if (process.env.NODE_ENV == "mock") {
    mockXHR();
    // mockXHR2();
}
// createApp(App).use(router).use(ElementPlus).mount('#app')
createApp(App).use(router).use(Particles).use(debounce).mount('#app')
