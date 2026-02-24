import Contenido from '@/views/Contenido.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/inicio/:pag',
      name: 'home',
      component: Contenido
    }
  ],
})

export default router
