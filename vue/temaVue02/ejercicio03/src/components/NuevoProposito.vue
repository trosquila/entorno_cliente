<script setup>
import { ref } from 'vue';
    const emit = defineEmits(['guardarProposito']);
    let propsNuevoProposito = defineProps(['propositos']);

    let nuevoProposito= ref("");

    function notifyParent() {
        console.log(nuevoProposito.value);
        
        emit('guardarProposito', nuevoProposito.value);
    }

    let propositoEnter = (event) =>{
        if(event.key == 'Enter'){
            propsNuevoProposito.propositos.push({
                texto: nuevoProposito.value,
                hecho: false
            })
        }
    }


</script>
<template>
    <h2>Nuevo proposito</h2>
    <input type="text" name="nuevoProposito" id="nuevoProposito" v-model="nuevoProposito" @keypress="propositoEnter($event)">
    <button type="button" @click="notifyParent"> Nuevo proposito</button>
</template>