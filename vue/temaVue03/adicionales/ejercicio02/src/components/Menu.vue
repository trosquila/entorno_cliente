<script setup>
import { RouterLink } from 'vue-router';
import Formulario from './Formulario.vue';
</script>
<template>
        <section class="menu">
                <RouterLink to="/">Inicio</RouterLink>
                <RouterLink to="/articulos">Articulos</RouterLink>
                <RouterLink to="/acerca">Acerca de</RouterLink>
                <Formulario></Formulario>       
        </section>
        
</template>