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
  ],
})

export default router
