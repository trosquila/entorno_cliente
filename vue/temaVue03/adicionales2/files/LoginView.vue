<template>
  <div class="login-wrap">
    <div class="login-card">
      <h2>Acceso al Portal</h2>

      <div v-if="mensajeError" class="alerta alerta-error">{{ mensajeError }}</div>

      <div class="form-group">
        <label>Nombre de usuario</label>
        <input v-model="nombre" type="text" placeholder="Tu nombre de usuario" />
      </div>

      <div class="form-group">
        <label>Contraseña</label>
        <input v-model="password" type="password" placeholder="Tu contraseña" />
      </div>

      <button class="btn btn-primary btn-block" @click="acceder">Entrar</button>

      <p class="nota">Si no tienes cuenta, se creará automáticamente al acceder.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const nombre = ref('')
const password = ref('')
const mensajeError = ref('')

const API = 'http://localhost:3000'

async function acceder() {
  mensajeError.value = ''

  if (!nombre.value.trim() || !password.value.trim()) {
    mensajeError.value = 'Por favor, introduce usuario y contraseña.'
    return
  }

  try {
    // Buscar si el usuario ya existe
    const res = await axios.get(`${API}/usuarios?nombre=${nombre.value.trim()}`)
    
    if (res.data.length > 0) {
      // Usuario existe: iniciar sesión
      sessionStorage.setItem('usuario', res.data[0].nombre)
      sessionStorage.setItem('usuarioId', res.data[0].id)
      sessionStorage.setItem('rol', res.data[0].rol || 'usuario')
    } else {
      // Usuario nuevo: dar de alta
      const nuevoUsuario = {
        nombre: nombre.value.trim(),
        rol: 'usuario',
        inscripciones: []
      }
      const creado = await axios.post(`${API}/usuarios`, nuevoUsuario)
      sessionStorage.setItem('usuario', creado.data.nombre)
      sessionStorage.setItem('usuarioId', creado.data.id)
      sessionStorage.setItem('rol', 'usuario')
    }

    router.push({ name: 'Inicio' })
  } catch (e) {
    mensajeError.value = 'Error al conectar con el servidor. ¿Está json-server en marcha?'
  }
}
</script>

<style scoped>
.login-wrap {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.login-card {
  background: white;
  border-radius: 8px;
  padding: 36px 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-top: 4px solid #8B0000;
}

.btn-block {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-top: 4px;
}

.nota {
  margin-top: 16px;
  font-size: 0.85rem;
  color: #888;
  text-align: center;
}
</style>
