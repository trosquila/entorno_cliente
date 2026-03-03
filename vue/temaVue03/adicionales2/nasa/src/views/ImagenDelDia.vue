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
        console.log(fecha);
        
        imagenDelDia.value = await getImagenDelDiaFiltro(fecha);
    }

    
</script>
<template>
    <section class="contenedorImagenDelDia" v-if="imagenDelDia">

        <img v-if="imagenDelDia.media_type!='video'" :src="imagenDelDia.url" alt="">
        <video width="640" height="360" controls v-else>
        <source :src="imagenDelDia.url" type="video/webm">
        Tu navegador no soporta la etiqueta de video
        </video>
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