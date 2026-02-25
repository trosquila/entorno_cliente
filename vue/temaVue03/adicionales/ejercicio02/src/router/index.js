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
const isAuthenticated = Boolean(localStorage.getItem("edad"));
const edad = localStorage.getItem("edad");
if (to.name !== "inicio" && !isAuthenticated) {
  return { name: "inicio" };
}

if ((to.name === "verArticulo" && edad < 18) || !isAuthenticated) {
  return { name: "articulos" };
}

if ((to.name === "articulos" && edad < 16) || !isAuthenticated) {
  return { name: "inicio" };
}
});
export default router
