<script setup>

  import { ref } from "vue";
  import AddPelicula from "./components/AddPelicula.vue";
  import ListarPeliculas from "./components/listarPeliculas.vue";
  import DejarComentario from "./components/DejarComentario.vue";

  const carteleraOrdenada = ref([]);

  function guardarNuevaPelicula(pelicula){
    carteleraOrdenada.value.push(pelicula);
    ordenarCartelera();
  }

  function ordenarCartelera(){
    carteleraOrdenada.value = carteleraOrdenada.value.sort((a, b) => {
        const fechaA = new Date(a.fechaEstreno.split('-').reverse().join('-'));
        const fechaB = new Date(b.fechaEstreno.split('-').reverse().join('-'));
        return fechaA - fechaB;
    });
  }
  
</script>

<template>
  <AddPelicula @guardarPelicula="guardarNuevaPelicula"></AddPelicula>
  <ListarPeliculas :cartelera="carteleraOrdenada"></ListarPeliculas>
  <DejarComentario></DejarComentario>
</template>

<style scoped></style>
