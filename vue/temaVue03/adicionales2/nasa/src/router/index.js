import Asteroides from '@/views/Asteroides.vue'
import ImagenDelDia from '@/views/ImagenDelDia.vue'
import PanelPrincipal from '@/views/PanelPrincipal.vue'
import MasInfoAsteroide from '@/views/MasInfoAsteroide.vue'
import { createRouter, createWebHistory } from 'vue-router'
    import { getAsteroidesPorId } from '../assets/js/consultas.js'

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
      path: '/masInfoAsteroide/:id',
      name: 'masInfoAsteroide',
      component: MasInfoAsteroide,
    },
  ],
})
router.beforeEach(async(to) =>{
  if(to.name ==="masInfoAsteroide"){
    to.meta.nasaData = await  getAsteroidesPorId(to.params.id);
  }
});
export default router
