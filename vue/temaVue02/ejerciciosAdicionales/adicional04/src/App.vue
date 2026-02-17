<script setup>
import { ref } from 'vue';
import Formulario from './components/Formulario.vue';
import Listado from './components/Listado.vue';
import Comentarios from './components/Comentarios.vue';
const listadoPeliculas = ref([]);

function guardarDato (value){
  listadoPeliculas.value.push(value);
  ordenarDatos();
}
function ordenarDatos() {
  listadoPeliculas.value.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
}
function guardarCambiosFecha(posicion, fecha) {
  listadoPeliculas.value[posicion].fecha = fecha;
  
}

function guardarCambiosTitulo(posicion, titulo) {
  listadoPeliculas.value[posicion].titulo = titulo;
}

function addComentario(posicion, nuevoComentario) {
    listadoPeliculas.value[posicion].Comentarios = nuevoComentario;
    listadoPeliculas.value[posicion].comentariosAct = false;
}
function activarComentarios(posicion){
      listadoPeliculas.value[posicion].comentariosAct = true;
      console.log('activo '+listadoPeliculas.value[posicion].comentariosAct);
      
}
</script>

<template>
  <Formulario @guardarEnMemoria = "guardarDato"></Formulario>
  <Listado :memoria="listadoPeliculas" @guardarCambiosFecha="guardarCambiosFecha" @guardarCambiosTitulo="guardarCambiosTitulo" @activarComentario="activarComentarios"></Listado>
  <Comentarios @guardarNuevoComentario ="addComentario" :memoria="listadoPeliculas"></Comentarios>
</template>

<style scoped></style>
