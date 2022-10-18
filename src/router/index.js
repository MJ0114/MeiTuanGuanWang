import {createRouter, createWebHistory} from 'vue-router'
import MenuDetail from '../components/MinSu.vue'

const routes = [
    // {
    //     path:"/login",
    //     name:"login",
    //     component:MenuDetail
    // }
];

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;