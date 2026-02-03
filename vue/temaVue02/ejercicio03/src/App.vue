<script setup>
  import { ref } from 'vue';
  import ListaPropositos from './components/ListaPropositos.vue';
  import NuevoProposito from './components/NuevoProposito.vue';

  let listaPropositos = ref([
      { texto: "Hacer deporte", hecho: false, activo: false },
      { texto: "Comer más sano", hecho: false, activo: false },
      { texto: "Viajar más", hecho: true, activo: false }]);
      let borrarLista = () =>{
        listaPropositos.value = [];
      }
</script>

<template>
    <h1>Propositos de año nuevo:</h1>
    <ListaPropositos :propositos="listaPropositos"></ListaPropositos>
    <NuevoProposito :propositos="listaPropositos"></NuevoProposito>
  <button type="button" @click="borrarLista">Borrar lista</button>
</template>

<style scoped></style>
