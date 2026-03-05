<script setup>
import '../assets/styles/global.css';
import {getClientes} from '../assets/js/consultas.js'
import { onBeforeMount, ref } from 'vue';
import { RouterLink } from 'vue-router';

const clientes = ref('');
const reparaciones = ref('');
onBeforeMount(async ()=>{
    clientes.value = await getClientes();
});
</script>
<template>
    <section class="contenedorClientes">
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DNI</th>
                <th>Teléfono</th>
                <th>Email</th>
            </tr>
            <tr v-for="(cliente, index) in clientes" :key="index">
                <td><RouterLink :to="`/verCliente/${cliente.id}`">{{cliente.nombre}}</RouterLink></td>
                <td>{{cliente.apellidos}}</td>
                <td>{{ cliente.dni }}</td>
            </tr>
        </table>
    </section>
</template>