<script setup>
import '../assets/styles/global.css';
import {getClientes, getVehiculos, getReparaciones} from '../assets/js/consultas.js'
import { onBeforeMount, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()

const datosTabla = ref([]);
const clientes = ref('');
const vehiculos = ref('');
const reparaciones = ref('');


onBeforeMount(async ()=>{
    clientes.value = await getClientes();
    vehiculos.value = await getVehiculos();
    reparaciones.value = await getReparaciones();

    clientes.value.forEach(cliente => {
        let user = {
            id:0,
            nombre:'',
            numReparaciones:0
        }
        user.id = cliente.id;
        user.nombre = cliente.nombre+' '+cliente.apellidos;

        const cochesUser = vehiculos.value.filter((vehiculo)=>{
            if(vehiculo.clienteId == cliente.id){
                return vehiculo;
            }
        }); 
        
        reparaciones.value.filter((reparacion)=>{
            cochesUser.forEach(element => {
                element.id == reparacion.vehiculoId? user.numReparaciones ++: '';
            });
        });
        
        datosTabla.value.push(user);
    });
});

function crearUser() {
    router.push({name:'nuevoCliente'});
}
</script>
<template>
    <section class="contenedorClientes">
        <table>
            <tr>
                <th>Nombre</th>
                <th>Reparaciones</th>
            </tr>
            <tr v-for="(cliente, index) in datosTabla" :key="index">
                <td><RouterLink :to="`/verCliente/${cliente.id}`">{{cliente.nombre }}</RouterLink></td>
                <td>{{cliente.numReparaciones}}</td>
            </tr>
        </table>
        <button class="btnPrimario separarTop" @click="crearUser()">Nuevo cliente</button>
    </section>
</template>