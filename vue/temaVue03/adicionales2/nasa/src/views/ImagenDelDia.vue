<script setup>
    import { onMounted, ref } from 'vue';
    import { getImagenDelDia, getImagenDelDiaFiltro } from '../assets/js/consultas.js'
    import '../assets/styles/global.css';
    let imagenDelDia = ref('');
    const fechaFiltro = ref('');
    onMounted(async () =>{
        imagenDelDia.value = await getImagenDelDia();
    });

    async function buscarImagenPorFecha(){
        const fecha = fechaFiltro.value;
        imagenDelDia.value = await getImagenDelDiaFiltro(fecha);
    }

    
</script>
<template>
    <section class="contenedorImagenDelDia" v-if="imagenDelDia">
        <img :src="imagenDelDia.url" alt="">
        <div class="datosImagen">
            <p>Título: {{ imagenDelDia.title }}</p>
            <p>Fecha: {{ imagenDelDia.date }}</p>
            <p>Explicación: {{ imagenDelDia.explanation }}</p>
        </div>
        <form action="">
            <label for="">Buscar por fecha</label>
            <input type="date" v-model="fechaFiltro">
            <button type="submit" @click.prevent="buscarImagenPorFecha()">Buscar</button>
        </form>
    </section>
    <section class="contenedorImagenDelDia" v-else>
        <p>¡Todavia no hay foto de ese dia!</p>
    </section>
    
</template>