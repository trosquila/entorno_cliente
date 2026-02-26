import Acerca from '@/views/Acerca.vue'
import Articulos from '@/views/Articulos.vue'
import Incio from '@/views/Incio.vue'
import VerArticulo from '@/views/VerArticulo.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Incio,
    },
    {
      path: '/articulos',
      name: 'articulos',
      component: Articulos,
    },
    {
      path: '/acerca',
      name: 'acerca',
      component: Acerca,
    },
        {
      path: '/verArticulo/:id',
      name: 'verArticulo',
      component: VerArticulo,
    },
  ],
})
router.beforeEach((to, from) => {
  const edad = localStorage.getItem("edad");
  const isAuthenticated = Boolean(edad);
  const edadNum = Number(edad);

  // 1. SI NO ESTÁ AUTENTICADO:
  // Solo permitimos que se quede en 'inicio'. Si intenta ir a otro lado, a inicio.
  if (!isAuthenticated) {
    if (to.name !== 'inicio') {
      return { name: 'inicio' };
    }
    return; // Si ya va a inicio, no hagas nada más.
  }

  // 2. SI ESTÁ AUTENTICADO (Ya sabemos que hay edad):
  // Filtro para VerArticulo
  if (to.name === "verArticulo" && edadNum < 18) {
    return { name: "articulos" };
  }

  // Filtro para Articulos
  if (to.name === "articulos" && edadNum < 16) {
    // Si tiene menos de 16 y no estamos ya en inicio, mándalo a inicio
    if (to.name !== 'inicio') {
      return { name: "inicio" };
    }
  }
});

export default router
