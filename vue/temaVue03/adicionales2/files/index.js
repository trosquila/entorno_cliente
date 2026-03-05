import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import LoginView from '../views/LoginView.vue'
import EventosView from '../views/EventosView.vue'
import DetalleEventoView from '../views/DetalleEventoView.vue'
import MisInscripcionesView from '../views/MisInscripcionesView.vue'
import AdministracionView from '../views/AdministracionView.vue'

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/eventos', name: 'Eventos', component: EventosView },
  { path: '/eventos/:id', name: 'DetalleEvento', component: DetalleEventoView, props: true },
  { path: '/mis-inscripciones', name: 'MisInscripciones', component: MisInscripcionesView },
  { path: '/administracion', name: 'Administracion', component: AdministracionView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard global: protege rutas que requieren autenticación
router.beforeEach((to, from) => {
  const usuario = sessionStorage.getItem('usuario')
  const rutasProtegidas = ['Eventos', 'DetalleEvento', 'MisInscripciones', 'Administracion']

  if (rutasProtegidas.includes(to.name) && !usuario) {
    return { name: 'Login' }
  }

  // Si ya está autenticado y va a Login, redirigir a Inicio
  if (to.name === 'Login' && usuario) {
    return { name: 'Inicio' }
  }
})

export default router
