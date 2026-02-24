<script setup>
import Header from './components/Header.vue';
import MenuIzquierda from './components/MenuIzquierda.vue';

</script>

<template>
  <Header></Header>
  <main>
    <RouterView></RouterView>
    <MenuIzquierda></MenuIzquierda>
  </main>
</template>

<style scoped></style>
