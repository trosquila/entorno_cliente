<template>
  <div>
    <h2>Mis Inscripciones</h2>

    <div v-if="cargando" class="alerta">Cargando inscripciones...</div>
    <div v-else-if="error" class="alerta alerta-error">{{ error }}</div>

    <div v-else>
      <div v-if="eventos.length === 0" class="alerta">
        No tienes ninguna inscripción activa.
      </div>

      <div v-for="evento in eventos" :key="evento.id" class="card evento-card">
        <div class="evento-info">
          <h3>{{ evento.nombre }}</h3>
          <p>📅 {{ formatFecha(evento.fecha) }}</p>
          <p>📍 {{ evento.ubicacion }}</p>
        </div>
        <button class="btn btn-danger" @click="cancelarInscripcion(evento)">
          Cancelar inscripción
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API = 'http://localhost:3000'
const eventos = ref([])
const cargando = ref(true)
const error = ref('')
const usuarioId = sessionStorage.getItem('usuarioId')

onMounted(async () => {
  await cargarInscripciones()
})

async function cargarInscripciones() {
  cargando.value = true
  try {
    const userRes = await axios.get(`${API}/usuarios/${usuarioId}`)
    const ids = userRes.data.inscripciones

    if (ids.length === 0) {
      eventos.value = []
      return
    }

    // Cargar todos los eventos y filtrar los inscritos
    const eventosRes = await axios.get(`${API}/eventos`)
    eventos.value = eventosRes.data.filter(e => ids.includes(e.id))
  } catch (e) {
    error.value = 'Error al cargar las inscripciones.'
  } finally {
    cargando.value = false
  }
}

async function cancelarInscripcion(evento) {
  try {
    // Incrementar plazas del evento
    await axios.patch(`${API}/eventos/${evento.id}`, {
      plazasDisponibles: evento.plazasDisponibles + 1
    })

    // Quitar inscripción del usuario
    const userRes = await axios.get(`${API}/usuarios/${usuarioId}`)
    const nuevasInscripciones = userRes.data.inscripciones.filter(id => id !== evento.id)
    await axios.patch(`${API}/usuarios/${usuarioId}`, { inscripciones: nuevasInscripciones })

    // Actualizar la lista localmente
    eventos.value = eventos.value.filter(e => e.id !== evento.id)
  } catch (e) {
    error.value = 'Error al cancelar la inscripción.'
  }
}

function formatFecha(fecha) {
  return new Date(fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
.evento-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.evento-info h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.evento-info p {
  color: #555;
  margin-bottom: 4px;
  font-size: 0.95rem;
}
</style>
