# EDeportes Salamanca – Panel de Gestión

Aplicación Vue 3 + Vue Router + Axios + json-server para gestión de eventos deportivos.

## Instalación

```bash
npm install
```

## Ejecución (necesita DOS terminales)

**Terminal 1 – json-server (base de datos):**
```bash
npm run server
```
Arranca la API REST en http://localhost:3000

**Terminal 2 – aplicación Vue:**
```bash
npm run dev
```
Abre http://localhost:5173 en el navegador.

## Estructura del proyecto

```
src/
├── main.js
├── App.vue              # Layout, cabecera y nav
├── router/
│   └── index.js         # Rutas + guards de autenticación
└── views/
    ├── InicioView.vue
    ├── LoginView.vue
    ├── EventosView.vue
    ├── DetalleEventoView.vue
    ├── MisInscripcionesView.vue
    └── AdministracionView.vue

dataEventos.json          # Base de datos json-server
```

## Credenciales de administrador

El usuario **admin** ya existe en `dataEventos.json` con rol "admin".  
Introduce cualquier contraseña para acceder (el sistema no valida passwords reales).

## Funcionalidades

- **Login/Registro**: usuario nuevo se crea automáticamente
- **Eventos**: listado con plazas disponibles
- **Detalle**: inscribirse (reduce plazas)
- **Mis Inscripciones**: cancelar (devuelve plazas)
- **Administración** (solo admin): crear y eliminar eventos
- **Guards de ruta**: redirige a login si no autenticado
