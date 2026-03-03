<script setup>
    import { onMounted, ref } from 'vue';
    import { getAsteroidesPorId } from '../assets/js/consultas.js'
    import { useRoute } from 'vue-router';
    import '../assets/styles/global.css';
    let asteroide = ref(null);

    const route = useRoute();
    const idAsteroide = route.params.id;
    onMounted(async () =>{
        asteroide.value = await getAsteroidesPorId(idAsteroide);
    });

    
</script>
<template>
    <section v-if="asteroide">
        <h2>Mas info</h2>
        <p>Nombre: {{ asteroide.name }}</p>
        <p>URL:{{ asteroide.nasa_jpl_url }}</p>
        <p>Magnitud absoluta: {{ asteroide.absolute_magnitude_h }}</p>
        <p>Diametro mínimo: {{ asteroide.estimated_diameter.kilometers.estimated_diameter_min}}</p>
        <p>Diámetro máximo: {{ asteroide.estimated_diameter.kilometers.estimated_diameter_max }}</p>
        <p>Potencialmente peligroso: {{ asteroide.is_potentially_hazardous_asteroid}}</p>
        <p>Aproximaciones registradas: {{ asteroide.close_approach_data.length }}</p>
    </section>
    <p v-else>Cargando...</p>
</template>