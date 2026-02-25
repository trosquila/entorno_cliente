<script setup>
import { ref, onMounted } from 'vue';
import { useRoute} from 'vue-router';
const route = useRoute();
const id = ref('');
id.value = route.params.id;
console.log('id '+id.value);

const result = ref('Cargando...'); 

async function cargarArticulos() {
    try {
        const consulta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`);
        if (!consulta.ok) throw new Error(`Error: ${consulta.status}`);
        
        const datos = await consulta.json();
        // 2. Asignamos el valor a la referencia
        result.value = datos; 
    } catch (error) {
        result.value = "Error al cargar los datos";
    }
}
console.log(result);


// 3. Llamamos a la función cuando el componente se monta
onMounted(() => {
    cargarArticulos();
});
</script>
<template>
    <p>{{ result.body }}</p>
</template>