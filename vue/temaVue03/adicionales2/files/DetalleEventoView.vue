<template>
  <div>
    <div v-if="cargando" class="alerta">Cargando evento...</div>
    <div v-else-if="error" class="alerta alerta-error">{{ error }}</div>

    <div v-else-if="evento">
      <h2>{{ evento.nombre }}</h2>

      <div class="card detalle-card">
        <div class="detalle-fila">
          <span class="detalle-label">📅 Fecha</span>
          <span>{{ formatFecha(evento.fecha) }}</span>
        </div>
        <div class="detalle-fila">
          <span class="detalle-label">📍 Ubicación</span>
          <span>{{ evento.ubicacion }}</span>
        </div>
        <div class="detalle-fila">
          <span class="detalle-label">🏟 Plazas disponibles</span>
          <span :class="evento.plazasDisponibles > 0 ? 'plazas-ok' : 'plazas-agotadas'">
            {{ evento.plazasDisponibles }}
          </span>
        </div>

        <div class="acciones">
          <div v-if="mensajeOk" class="alerta">{{ mensajeOk }}</div>
          <div v-if="mensajeError" class="alerta alerta-error">{{ mensajeError }}</div>

          <button
            class="btn btn-primary"
            :disabled="evento.plazasDisponibles === 0 || yaInscrito"
            @click="inscribirse"
          >
            {{ yaInscrito ? '✓ Ya inscrito' : 'Inscribirse' }}
          </button>

          <RouterLink to="/eventos" class="btn btn-secondary" style="margin-left:12px;">
            ← Volver
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const props = defineProps({ id: String })
const route = useRoute()
const API = 'http://localhost:3000'

const evento = ref(null)
const cargando = ref(true)
const error = ref('')
const mensajeOk = ref('')
const mensajeError = ref('')
const yaInscrito = ref(false)

const usuarioId = sessionStorage.getItem('usuarioId')

onMounted(async () => {
  try {
    const eventoId = props.id || route.params.id
    const res = await axios.get(`${API}/eventos/${eventoId}`)
    evento.value = res.data

    // Comprobar si ya está inscrito
    const userRes = await axios.get(`${API}/usuarios/${usuarioId}`)
    yaInscrito.value = userRes.data.inscripciones.includes(Number(eventoId))
  } catch (e) {
    error.value = 'No se pudo cargar el evento.'
  } finally {
    cargando.value = false
  }
})

async function inscribirse() {
  mensajeOk.value = ''
  mensajeError.value = ''
  try {
    // Reducir plazas del evento
    await axios.patch(`${API}/eventos/${evento.value.id}`, {
      plazasDisponibles: evento.value.plazasDisponibles - 1
    })
    evento.value.plazasDisponibles--

    // Añadir inscripción al usuario
    const userRes = await axios.get(`${API}/usuarios/${usuarioId}`)
    const inscripciones = [...userRes.data.inscripciones, evento.value.id]
    await axios.patch(`${API}/usuarios/${usuarioId}`, { inscripciones })

    yaInscrito.value = true
    mensajeOk.value = '¡Inscripción realizada con éxito!'
  } catch (e) {
    mensajeError.value = 'Error al procesar la inscripción.'
  }
}

function formatFecha(fecha) {
  return new Date(fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
.detalle-card {
  max-width: 560px;
}

.detalle-fila {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f0e8e0;
  font-size: 1.05rem;
}

.detalle-label {
  font-family: 'Oswald', sans-serif;
  color: #8B0000;
  font-size: 0.95rem;
}

.plazas-ok { color: #2ecc71; font-weight: 700; }
.plazas-agotadas { color: #e74c3c; font-weight: 700; }

.acciones {
  margin-top: 24px;
}
</style>
