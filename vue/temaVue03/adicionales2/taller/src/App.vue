<script setup>
import './assets/styles/global.css';
import { RouterLink, RouterView } from 'vue-router'
import Cabecera from './components/Cabecera.vue';
import Pie from './components/Pie.vue';
</script>

<template>
  <Cabecera></Cabecera>
  <main>
    <RouterView></RouterView>
  </main>
  <Pie></Pie>
</template>
