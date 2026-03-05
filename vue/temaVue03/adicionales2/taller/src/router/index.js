import Clientes from '@/views/Clientes.vue'
import Panel from '@/views/Panel.vue'
import VerCliente from '@/views/VerCliente.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/panel',
      name: 'panel',
      component: Panel,
    },
    {
      path: '/clientes',
      name: 'cliente',
      component: Clientes,
    },
    {
      path: '/verClientes/:id',
      name: 'verVCliente',
      component: VerCliente,
    },
  ],
})

export default router
