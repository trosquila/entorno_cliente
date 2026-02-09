<script setup>
import Calendario from './components/Calendario.vue';
import Citas from './components/Citas.vue';

</script>

<template>
  <div class="contenedor">
    <Calendario></Calendario>
    <Citas></Citas>
  </div>
  
</template>

<style scoped>
  .contenedor{
    display: grid;
  }
</style>
