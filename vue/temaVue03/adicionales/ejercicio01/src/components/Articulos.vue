<script setup>
import { ref, onMounted } from 'vue';

// 1. Definimos una variable reactiva vacía
const result = ref('Cargando...'); 

async function cargarArticulos() {
    try {
        const consulta = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!consulta.ok) throw new Error(`Error: ${consulta.status}`);
        
        const datos = await consulta.json();
        // 2. Asignamos el valor a la referencia
        result.value = datos; 
    } catch (error) {
        result.value = "Error al cargar los datos";
    }
}

// 3. Llamamos a la función cuando el componente se monta
onMounted(() => {
    cargarArticulos();
});
</script>

<template>
    <p>{{ result }}</p>
</template>