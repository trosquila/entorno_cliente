<script setup>
    import { onMounted, ref } from 'vue';
    import { getAsteroidesCercanos } from '../assets/js/consultas.js'
    import '../assets/styles/global.css';
    let asteroidesLista = ref([]);

    onMounted(async () =>{
        asteroidesLista.value = await getAsteroidesCercanos();
    });
</script>
<template>
    <section class="contenedorAsteroides">
        <table>
            <tr>
                <th>Nombre</th>
                <th>Magnitud</th>
                <th>Peligrosidad</th>
                <th>Diámetro</th>
            </tr>
            <tr v-for="(asteroide, index) in asteroidesLista" :key="index">
                <td>{{ asteroide.name }}</td>
                <td>{{ asteroide.absolute_magnitude_h }}</td>
                <td>{{ asteroide.is_potentially_hazardous_asteroid }}</td>
                <td>{{ asteroide.estimated_diameter.kilometers.estimated_diameter_max }}</td>
            </tr>
        </table>
    </section>
</template>