import { createApp } from 'vue'
import './style.css'
import store from './store'
import router from './router'
import './assets/icon/iconfont.css'
import 'animate.css'
import App from './App.vue'

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).mount('#app')
