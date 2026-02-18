<script setup>
import CasaDelLibro from '@/components/CasaDelLibro.vue';
import { ref } from 'vue';

const paises = ref([
    {
        pais: "España",
        autores: [
            "Carlos Ruiz Zafón",
            "Miguel Delibes",
            "Javier Marías",
            "Almudena Grandes",
            "Arturo Pérez-Reverte"
        ]
    },
    {
        pais: "Reino Unido",
        autores: [
            "J.K. Rowling",
            "George Orwell",
            "Agatha Christie",
            "Virginia Woolf",
            "Arthur Conan Doyle"
        ]
    },
    {
        pais: "Francia",
        autores: [
            "Victor Hugo",
            "Albert Camus",
            "Marcel Proust",
            "Jules Verne",
            "Gustave Flaubert"
        ]
    },
    {
        pais: "Italia",
        autores: [
            "Dante Alighieri",
            "Umberto Eco",
            "Italo Calvino",
            "Primo Levi",
            "Giovanni Boccaccio"
        ]
    },
    {
        pais: "Alemania",
        autores: [
            "Johann Wolfgang von Goethe",
            "Thomas Mann",
            "Hermann Hesse",
            "Franz Kafka",
            "Bertolt Brecht"
        ]
    },
    {
        pais: "Estados Unidos",
        autores: [
            "Ernest Hemingway",
            "Mark Twain",
            "Toni Morrison",
            "F. Scott Fitzgerald",
            "Edgar Allan Poe"
        ]
    },
    {
        pais: "Rusia",
        autores: [
            "Fiódor Dostoyevski",
            "León Tolstói",
            "Antón Chéjov",
            "Vladimir Nabokov",
            "Aleksandr Pushkin"
        ]
    },
    {
        pais: "Japón",
        autores: [
            "Haruki Murakami",
            "Yasunari Kawabata",
            "Kenzaburō Ōe",
            "Natsume Sōseki",
            "Ryūnosuke Akutagawa"
        ]
    },
    {
        pais: "Argentina",
        autores: [
            "Jorge Luis Borges",
            "Julio Cortázar",
            "Adolfo Bioy Casares",
            "Ernesto Sabato",
            "Ricardo Piglia"
        ]
    },
    {
        pais: "México",
        autores: [
            "Octavio Paz",
            "Juan Rulfo",
            "Carlos Fuentes",
            "Elena Poniatowska",
            "Rosario Castellanos"
        ]
    }
]);
</script>

<template>
    <ol>
        <li v-for="(bibiliografia, index) in paises" :key="index">
            {{bibiliografia.pais}}
            <ul>
                <li v-for="(autor, index) in bibiliografia.autores" :key="index">
                    {{ autor }}
                </li>
            </ul>
        </li>
    </ol>
    <CasaDelLibro></CasaDelLibro>
</template>