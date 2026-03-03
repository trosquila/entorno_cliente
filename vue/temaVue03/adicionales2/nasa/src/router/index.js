import Asteroides from '@/views/Asteroides.vue'
import ImagenDelDia from '@/views/ImagenDelDia.vue'
import PanelPrincipal from '@/views/PanelPrincipal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/panelPrincipal',
      name: 'panelPrincipal',
      component: PanelPrincipal,
    },
    {
      path: '/imagenDelDia',
      name: 'imagenDelDia',
      component: ImagenDelDia,
    },
    {
      path: '/asteroides',
      name: 'asteroides',
      component: Asteroides,
    },
    {
      path: '/asteroides',
      name: 'asteroides',
      component: Asteroides,
    },
  ],
})

export default router
