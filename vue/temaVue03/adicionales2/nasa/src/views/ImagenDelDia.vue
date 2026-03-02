<script setup>
    import { onMounted, ref } from 'vue';
    import { getImagenDelDia } from '../assets/js/consultas.js'
    import '../assets/styles/global.css';
    let imagenDelDia = ref('');
    onMounted(async () =>{
        imagenDelDia.value = await getImagenDelDia();
            console.log('datos '+imagenDelDia.value);
    });

    
</script>
<template>
    <img :src="imagenDelDia.url" alt="">
</template>