<script setup>
import Header from './components/Header.vue';
import MenuIzquierda from './components/MenuIzquierda.vue';
import Contenido from './views/Contenido.vue';

</script>

<template>
  <Header></Header>
  <main>
    <Contenido></Contenido>
    <MenuIzquierda></MenuIzquierda>
  </main>
</template>

<style scoped></style>
