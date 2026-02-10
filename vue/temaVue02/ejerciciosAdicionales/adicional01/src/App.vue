<script setup>
import { ref } from 'vue';
import Calendario from './components/Calendario.vue';
import Citas from './components/Citas.vue';
import Formulario from './components/Formulario.vue';
  const citas = ref([]);

  function almacenarCita(value){
    citas.value.push(value);
    console.log(citas);
    
  }
</script>

<template>
  <div class="contenedor">
    <Calendario :listadoCitas="citas"></Calendario>
    <Citas :listadoCitas="citas"></Citas>
    <Formulario @guardarCita="almacenarCita"></Formulario>
  </div>
  
</template>

<style scoped>
  .contenedor{
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    gap: 40px;
  }
</style>
