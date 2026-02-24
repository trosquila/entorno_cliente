<script setup>
import '../assets/style.css';
import { useRoute, RouterView } from 'vue-router';
import { ref, watch } from 'vue';
import Articulos from '@/components/Articulos.vue';


const route = useRoute();
let opcionPagina = ref('');

watch(
() => route.params.pag,
(nuevaPag) => {
    opcionPagina.value = nuevaPag;
} ,
{immediate: true}
);

</script>
<template>
    <section v-if="!opcionPagina">
        <h3>Inicio</h3>
    </section>
    <section v-else-if="opcionPagina == 'articulos'">
        <Articulos></Articulos>
    </section>
    <section v-else-if="opcionPagina == 'acerca'">
        <h3>acerca</h3>
    </section>
</template> 