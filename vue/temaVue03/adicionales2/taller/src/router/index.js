import Clientes from '@/views/Clientes.vue'
import NuevoCliente from '@/views/NuevoCliente.vue'
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
      name: 'clientes',
      component: Clientes,
    },
    {
      path: '/verCliente/:id',
      name: 'verVCliente',
      component: VerCliente,
    },
    {
      path: '/nuevoCliente',
      name: 'nuevoCliente',
      component: NuevoCliente,
    },
  ],
})

export default router
