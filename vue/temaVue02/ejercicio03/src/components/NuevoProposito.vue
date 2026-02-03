<script setup>
import { ref } from 'vue';

    let propsNuevoProposito = defineProps(['propositos']);

    let nuevoProposito= ref("");
    let guardarProposito = () =>{
        propositos.push({
            texto: nuevoProposito.value,
            hecho: false
        })
    }
</script>
<template>
    <h2>Nuevo proposito</h2>
    <input type="text" name="nuevoProposito" id="nuevoProposito" v-model="nuevoProposito">
    <button type="button" @click="guardarProposito"> Nuevo proposito</button>
</template>