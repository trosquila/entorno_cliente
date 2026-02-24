<script setup>
import { RouterView } from 'vue-router';
import './assets/style.css';
import Menu from './components/Menu.vue';
</script>

<template>
  <header>
    <h2>La desinformación</h2>
  </header>
  <main>
    <RouterView></RouterView>
    <Menu></Menu>
  </main>
</template>

<style scoped>
</style>
