<script setup>
    import '../assets/styles/global.css';
    import { RouterLink } from 'vue-router';
</script>
<template>
    <nav>
        <div>
            <RouterLink to="/panelPrincipal">Panel Principal</RouterLink>
        </div>
        <div>
            <RouterLink to="/imagenDelDia">Imagen del Día</RouterLink>
        </div>
        <div>
            <RouterLink to="">Asterioides Cercanos</RouterLink>
        </div>
        <div>
            <RouterLink to="">Búsqueda por ID</RouterLink>
        </div>
        <div>
            <RouterLink to="">Acerca del Centro</RouterLink>
        </div>
    </nav>
</template>