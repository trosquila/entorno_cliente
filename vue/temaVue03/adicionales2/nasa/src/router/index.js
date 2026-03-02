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
  ],
})

export default router
