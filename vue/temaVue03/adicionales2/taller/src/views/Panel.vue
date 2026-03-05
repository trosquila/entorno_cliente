<script setup>
import { onBeforeMount, ref } from 'vue';
import '../assets/styles/global.css';
import {getClientes, getVehiculos, getReparaciones } from '../assets/js/consultas.js'
const cantidadTotalElementos = ref({
    cantidadClientes: 0,
    cantidadVehiculos: 0,
    cantidadReparaciones: 0
});

onBeforeMount(async () =>{
    let clientes = await getClientes();
    clientes = clientes.length;
    cantidadTotalElementos.value.cantidadClientes = clientes;
    
    let vehiculos = await getVehiculos();
    vehiculos = vehiculos.length;
    cantidadTotalElementos.value.cantidadVehiculos = vehiculos;

    let reparaciones = await getReparaciones();
    reparaciones = reparaciones.length;
    cantidadTotalElementos.value.cantidadReparaciones = reparaciones;
    
});
</script>
<template>
    <section>
        <p>Cantidad clientes: {{ cantidadTotalElementos.cantidadClientes }}</p>
        <p>Cantidad vehiculos: {{ cantidadTotalElementos.cantidadVehiculos }}</p>
        <p>Cantidad reparaciones: {{ cantidadTotalElementos.cantidadReparaciones }}</p>
    </section>
</template>