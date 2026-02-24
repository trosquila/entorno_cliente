<script setup>
import '../assets/style.css';
import { useRoute } from 'vue-router';
import { watch } from 'vue';


const route = useRoute();
let opcionPagina = '';

watch(
() => route.params.id,
(nuevaPag) => {
    opcionPagina = nuevaPag;
} ,
{immediate: true}
);

</script>
<template>
    <section v-if="opcionPagina === ''">
        <h3>Inicio</h3>
    </section>
    <section v-if="opcionPagina === 'Inicio'">
        <h3>Inicio</h3>
    </section>
    <section v-if="opcionPagina === 'Inicio'">
        <h3>Inicio</h3>
    </section>
</template>