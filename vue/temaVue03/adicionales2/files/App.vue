<template>
  <div id="layout">
    <!-- Cabecera -->
    <header>
      <span class="logo-icon">⚽</span>
      <h1>EDeportes Salamanca <span>– Panel de Gestión</span></h1>
    </header>

    <!-- Menú de navegación -->
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/eventos">Eventos</RouterLink>
      <RouterLink to="/mis-inscripciones">Mis Inscripciones</RouterLink>
      <RouterLink to="/administracion">Administración</RouterLink>
      <RouterLink v-if="!usuarioActivo" to="/login" class="nav-login">Login</RouterLink>
      <button v-else class="btn-logout" @click="cerrarSesion">
        {{ usuarioActivo }} · Salir
      </button>
    </nav>

    <!-- Zona principal -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usuarioActivo = ref(sessionStorage.getItem('usuario'))

// Actualizar el nombre de usuario cuando cambia la ruta
router.afterEach(() => {
  usuarioActivo.value = sessionStorage.getItem('usuario')
})

function cerrarSesion() {
  sessionStorage.removeItem('usuario')
  usuarioActivo.value = null
  router.push({ name: 'Inicio' })
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Source Serif 4', Georgia, serif;
  background: #f5f0e8;
  color: #1a1a1a;
  min-height: 100vh;
}

#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Cabecera */
header {
  background: #8B0000;
  color: white;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.3);
}

header .logo-icon {
  font-size: 2rem;
}

header h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

header h1 span {
  font-weight: 400;
  opacity: 0.85;
  font-size: 1.2rem;
}

/* Navegación */
nav {
  background: #1a1a1a;
  display: flex;
  gap: 0;
  align-items: center;
}

nav a, nav .btn-logout {
  font-family: 'Oswald', sans-serif;
  color: #ccc;
  text-decoration: none;
  padding: 14px 22px;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: background 0.2s, color 0.2s;
  border: none;
  background: transparent;
  cursor: pointer;
}

nav a:hover, nav .btn-logout:hover {
  background: #8B0000;
  color: white;
}

nav a.router-link-active {
  background: #8B0000;
  color: white;
}

nav .nav-login {
  margin-left: auto;
}

nav .btn-logout {
  margin-left: auto;
  font-size: 0.85rem;
  color: #aaa;
}

/* Zona principal */
main {
  flex: 1;
  padding: 40px 48px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

/* Estilos comunes reutilizables */
.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  border-left: 4px solid #8B0000;
}

.btn {
  font-family: 'Oswald', sans-serif;
  padding: 10px 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: background 0.2s;
}

.btn-primary {
  background: #8B0000;
  color: white;
}
.btn-primary:hover { background: #a00000; }
.btn-primary:disabled { background: #ccc; cursor: not-allowed; }

.btn-danger {
  background: #c0392b;
  color: white;
}
.btn-danger:hover { background: #e74c3c; }

.btn-secondary {
  background: #555;
  color: white;
}
.btn-secondary:hover { background: #333; }

h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  color: #8B0000;
  margin-bottom: 24px;
  border-bottom: 2px solid #8B0000;
  padding-bottom: 8px;
}

.alerta {
  background: #fff3cd;
  border: 1px solid #ffc107;
  color: #856404;
  padding: 14px 18px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.alerta-error {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

input, select {
  font-family: 'Source Serif 4', serif;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 12px;
}

input:focus, select:focus {
  outline: none;
  border-color: #8B0000;
  box-shadow: 0 0 0 2px rgba(139,0,0,0.15);
}

label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.9rem;
  color: #555;
  display: block;
  margin-bottom: 4px;
  letter-spacing: 0.3px;
}

.form-group {
  margin-bottom: 16px;
}
</style>
