<script setup>
    import { onMounted, ref } from 'vue';
    import { getAsteroidesCercanos } from '../assets/js/consultas.js'
    import '../assets/styles/global.css';
    import router from '@/router/index.js';
    let asteroidesLista = ref([]);

    onMounted(async () =>{
        asteroidesLista.value = await getAsteroidesCercanos();
    });

    function organizarPorMagnitud() {
        asteroidesLista.value.sort((dato1, dato2) => dato2.absolute_magnitude_h - dato1.absolute_magnitude_h);
    }

    function masInfoAsteroide(idAsteroide) {
        router.push({
            name:'masInfoA',
            params:{id: idAsteroide}
        })
    }
</script>
<template>
    <section class="contenedorAsteroides">
        <table>
            <tr>
                <th>Nombre</th>
                <th @click="organizarPorMagnitud()">Magnitud</th>
                <th>Peligrosidad</th>
                <th>Diámetro</th>
            </tr>
            <tr v-for="(asteroide, index) in asteroidesLista" :key="index">
                <td @click="masInfoAsteroide(asteroide.id)">{{ asteroide.name }}</td>
                <td>{{ asteroide.absolute_magnitude_h }}</td>
                <td>{{ asteroide.is_potentially_hazardous_asteroid }}</td>
                <td>{{ asteroide.estimated_diameter.kilometers.estimated_diameter_max }}</td>
            </tr>
        </table>
    </section>
</template>