<script setup>
import { ref, computed } from 'vue'
import ListaPropositos from './components/ListaPropositos.vue'
import NuevoProposito from './components/NuevoProposito.vue'
import './assets/style.css'

const listaPropositos = ref([
  { texto: "Hacer deporte", hecho: false, activo: false },
  { texto: "Comer más sano", hecho: false, activo: false },
  { texto: "Viajar más", hecho: true,  activo: false }
])

const borrarLista = () => {
  listaPropositos.value = []
}

function guardar(valor) {
  listaPropositos.value.push({
    texto: valor,
    hecho: false,
    activo: false
  })
}

const hechos = computed(() =>
  listaPropositos.value.filter(p => p.hecho).length
)

const aplicarAmarillo = computed(() => hechos.value >= 2);
const aplicarRosa = computed(() => hechos.value < 2);
</script>

<template>
    <h1 :class="{ amarillo: aplicarAmarillo, rosa: aplicarRosa }">
      Propósitos de año nuevo:
    </h1>
    <ListaPropositos :propositos="listaPropositos"></ListaPropositos>
    <NuevoProposito :propositos="listaPropositos" @guardarProposito="guardar"></NuevoProposito>
  <button type="button" @click="borrarLista">Borrar lista</button>
</template>

<style scoped></style>
