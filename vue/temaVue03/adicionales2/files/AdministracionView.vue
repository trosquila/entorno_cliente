<template>
  <div>
    <h2>Administración</h2>

    <div v-if="cargando" class="alerta">Cargando...</div>
    <div v-else-if="error" class="alerta alerta-error">{{ error }}</div>

    <div v-else>
      <!-- Lista de eventos -->
      <h3 class="seccion-titulo">Listado de Eventos</h3>

      <div v-if="eventos.length === 0" class="alerta">No hay eventos.</div>

      <div v-for="evento in eventos" :key="evento.id" class="card evento-admin">
        <div>
          <strong>{{ evento.nombre }}</strong>
          <span class="meta"> · {{ formatFecha(evento.fecha) }} · {{ evento.ubicacion }}</span>
          <span class="plazas"> · Plazas: {{ evento.plazasDisponibles }}</span>
        </div>
        <button class="btn btn-danger btn-sm" @click="eliminarEvento(evento.id)">
          Eliminar
        </button>
      </div>

      <!-- Formulario nuevo evento -->
      <h3 class="seccion-titulo" style="margin-top: 36px;">Crear Nuevo Evento</h3>

      <div class="card formulario">
        <div v-if="mensajeOk" class="alerta">{{ mensajeOk }}</div>
        <div v-if="mensajeError" class="alerta alerta-error">{{ mensajeError }}</div>

        <div class="form-group">
          <label>Nombre del evento</label>
          <input v-model="nuevoEvento.nombre" type="text" placeholder="Nombre del evento" />
        </div>
        <div class="form-group">
          <label>Fecha</label>
          <input v-model="nuevoEvento.fecha" type="date" />
        </div>
        <div class="form-group">
          <label>Ubicación</label>
          <input v-model="nuevoEvento.ubicacion" type="text" placeholder="Lugar del evento" />
        </div>
        <div class="form-group">
          <label>Plazas disponibles</label>
          <input v-model.number="nuevoEvento.plazasDisponibles" type="number" min="0" placeholder="Número de plazas" />
        </div>

        <button class="btn btn-primary" @click="crearEvento">Crear Evento</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const API = 'http://localhost:3000'
const router = useRouter()

const eventos = ref([])
const cargando = ref(true)
const error = ref('')
const mensajeOk = ref('')
const mensajeError = ref('')

const nuevoEvento = ref({
  nombre: '',
  fecha: '',
  ubicacion: '',
  plazasDisponibles: 0
})

onMounted(async () => {
  // Comprobar rol admin
  const rol = sessionStorage.getItem('rol')
  if (rol !== 'admin') {
    alert('No tienes permisos de acceso a esta sección.')
    router.push({ name: 'Inicio' })
    return
  }
  await cargarEventos()
})

async function cargarEventos() {
  cargando.value = true
  try {
    const res = await axios.get(`${API}/eventos`)
    eventos.value = res.data
  } catch (e) {
    error.value = 'Error al cargar los eventos.'
  } finally {
    cargando.value = false
  }
}

async function eliminarEvento(id) {
  if (!confirm('¿Seguro que deseas eliminar este evento?')) return
  try {
    await axios.delete(`${API}/eventos/${id}`)
    // Actualizar lista automáticamente
    eventos.value = eventos.value.filter(e => e.id !== id)
  } catch (e) {
    error.value = 'Error al eliminar el evento.'
  }
}

async function crearEvento() {
  mensajeOk.value = ''
  mensajeError.value = ''

  const { nombre, fecha, ubicacion, plazasDisponibles } = nuevoEvento.value
  if (!nombre.trim() || !fecha || !ubicacion.trim()) {
    mensajeError.value = 'Por favor, rellena todos los campos.'
    return
  }

  try {
    const res = await axios.post(`${API}/eventos`, {
      nombre: nombre.trim(),
      fecha,
      ubicacion: ubicacion.trim(),
      plazasDisponibles
    })
    // Añadir a la lista automáticamente
    eventos.value.push(res.data)
    mensajeOk.value = 'Evento creado correctamente.'
    // Limpiar formulario
    nuevoEvento.value = { nombre: '', fecha: '', ubicacion: '', plazasDisponibles: 0 }
  } catch (e) {
    mensajeError.value = 'Error al crear el evento.'
  }
}

function formatFecha(fecha) {
  return new Date(fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
.seccion-titulo {
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.evento-admin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.evento-admin strong {
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
}

.meta, .plazas {
  font-size: 0.9rem;
  color: #777;
}

.btn-sm {
  padding: 7px 14px;
  font-size: 0.85rem;
}

.formulario {
  max-width: 520px;
}
</style>
