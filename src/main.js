import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // 引入router

createApp(App).use(router).mount('#app')  // 添加router使用

