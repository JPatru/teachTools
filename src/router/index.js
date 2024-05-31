import { createRouter, createWebHashHistory } from 'vue-router'
import ViewTools from '@/views/ViewTools.vue'
import ViewMatch from '@/views/ViewMatch.vue'

const routes = [
    {
        path: '/', 
        name: 'tools', 
        component: ViewTools 
    },
    {
        path: '/Match', 
        name: 'match', 
        component: ViewMatch 
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

    export default router