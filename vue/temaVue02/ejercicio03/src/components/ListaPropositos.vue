<script setup>  
    defineProps(['propositos']);

    
</script>

<template>
    <h2>lista</h2>
    <ul v-if="propositos.length > 0">
        <li v-for="(proposito, index) in propositos" :key="index" >
            {{proposito.texto}}
        </li>
    </ul>
    <p v-else>La lista de porpositos está vacía</p>
</template>