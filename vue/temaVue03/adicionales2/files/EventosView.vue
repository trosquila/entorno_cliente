<template>
  <div>
    <h2>Eventos Deportivos</h2>

    <div v-if="cargando" class="alerta">Cargando eventos...</div>
    <div v-else-if="error" class="alerta alerta-error">{{ error }}</div>

    <div v-else>
      <div v-if="eventos.length === 0" class="alerta">No hay eventos disponibles.</div>

      <div v-for="evento in eventos" :key="evento.id" class="card evento-card">
        <div class="evento-info">
          <h3>{{ evento.nombre }}</h3>
          <p>📅 {{ formatFecha(evento.fecha) }}</p>
          <p>📍 {{ evento.ubicacion }}</p>
          <p>
            <span :class="evento.plazasDisponibles > 0 ? 'plazas-ok' : 'plazas-agotadas'">
              🏟 {{ evento.plazasDisponibles > 0 ? `${evento.plazasDisponibles} plazas disponibles` : 'Sin plazas' }}
            </span>
          </p>
        </div>
        <RouterLink :to="{ name: 'DetalleEvento', params: { id: evento.id } }" class="btn btn-primary">
          Ver detalle
        </RouterLink>
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

onMounted(async () => {
  try {
    const res = await axios.get(`${API}/eventos`)
    eventos.value = res.data
  } catch (e) {
    error.value = 'No se pudieron cargar los eventos. ¿Está json-server en marcha?'
  } finally {
    cargando.value = false
  }
})

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
  color: #1a1a1a;
  margin-bottom: 6px;
}

.evento-info p {
  color: #555;
  margin-bottom: 4px;
  font-size: 0.95rem;
}

.plazas-ok { color: #2ecc71; font-weight: 600; }
.plazas-agotadas { color: #e74c3c; font-weight: 600; }
</style>
