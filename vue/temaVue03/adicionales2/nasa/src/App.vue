<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cabecera from './components/Cabecera.vue';
import Menu from './components/Menu.vue';
import PanelPrincipal from './views/PanelPrincipal.vue';
</script>

<template>
  <Cabecera></Cabecera>
  <Menu></Menu>
  <main>
    <RouterView></RouterView>
  </main>
</template>
