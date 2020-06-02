import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../HomeView/Home.vue'
import AddCard from '../AddCardView/AddCard.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,

        children: [
            {
                path: ':addcard',
                components: {
                    default: Home,
                    addcard: AddCard
                } 
            }
        ]
    }
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
