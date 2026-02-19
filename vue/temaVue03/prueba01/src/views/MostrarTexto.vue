<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const eleccion = route.params.id -1;
const textos = [
  "Este es el primer texto",
  "Aquí va el segundo texto",
  "Y este es el tercer texto"
];

</script>
<template>
    <h2 v-if="eleccion >= 0 && eleccion < 3">Mostrar textos {{ textos[eleccion]}}</h2>
    <p v-else>No hay valor almacenado para  {{ $route.params.id }}</p>  
</template>