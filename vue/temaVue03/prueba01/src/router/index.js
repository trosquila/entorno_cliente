import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bibliografia from '@/views/Bibliografia.vue'
import path from 'node:path/posix'
import MostrarTexto from '@/views/MostrarTexto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bibliografia',
      name: 'bibliografia',
      component: Bibliografia,
    },
    {
      path: '/mostrarTexto/:id',
      name: 'mostrar',
      component: MostrarTexto,
      props: true, 
    },
  ],
})

export default router
