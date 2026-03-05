<script setup>
import '../assets/styles/global.css';
import { getClientes, getVehiculos, getReparaciones, eliminarUsuario, eliminarVehiculos, eliminarReparaciones } from '../assets/js/consultas.js'
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const clientes = ref('');
const vehiculos = ref('');
const datosUser = ref({
    datosPersonales:'',
    vehiculosAsociados:[],
    reparacionesVehiculos:[]
});

const router = useRouter();
const route = useRoute();
const reparaciones = ref('');


onBeforeMount(async () => {
    clientes.value = await getClientes();
    vehiculos.value = await getVehiculos();
    reparaciones.value = await getReparaciones();
    
    clientes.value.forEach(element => {
        if(element.id == route.params.id){
            datosUser.value.datosPersonales = element;
        }
    });
    
    vehiculos.value.filter((vehiculo)=>{
        if(vehiculo.clienteId == datosUser.value.datosPersonales.id){
            datosUser.value.vehiculosAsociados.push(vehiculo);
        }
    });

    reparaciones.value.filter((reparacion)=>{
        datosUser.value.vehiculosAsociados.forEach(vehiculo => {
            if(reparacion.vehiculoId == vehiculo.id){
                console.log(reparacion.vehiculoId+' '+vehiculo.id);
                
                datosUser.value.reparacionesVehiculos.push(reparacion);
                
            }
        });
    });
});

function eliminarDatos() {
    datosUser.value.reparacionesVehiculos.forEach(element => {
        eliminarReparaciones(element.id);
    });

    datosUser.value.vehiculosAsociados.forEach(element => {  
        eliminarVehiculos(element.id);      
    });
    
    eliminarUsuario(datosUser.value.datosPersonales.id)

    router.push({name:'clientes'});
}
</script>
<template>
    <section class="detalleCliente">
        <!-- FICHA / INFORME DEL CLIENTE -->
        <article class="informe">
            <h3 class="tituloInforme">Datos del cliente</h3>

            <div class="ficha">
                <div class="fila">
                    <span class="etiqueta">Nombre</span>
                    <span class="valor">{{ datosUser.datosPersonales.nombre }}</span>
                </div>

                <div class="fila">
                    <span class="etiqueta">Apellidos</span>
                    <span class="valor">{{ datosUser.datosPersonales.apellidos }}</span>
                </div>

                <div class="fila">
                    <span class="etiqueta">DNI</span>
                    <span class="valor">{{ datosUser.datosPersonales.dni }}</span>
                </div>

                <div class="fila">
                    <span class="etiqueta">Teléfono</span>
                    <span class="valor">{{ datosUser.datosPersonales.telefono }}</span>
                </div>

                <div class="fila">
                    <span class="etiqueta">Email</span>
                    <span class="valor">{{ datosUser.datosPersonales.email}}</span>
                </div>
            </div>
        </article>

        <!-- VEHÍCULOS ASOCIADOS -->
        <article class="informe">
            <h3 class="tituloInforme">Vehículos asociados</h3>

            <div class="contenedorClientes contenedorVehiculos">
                <table class="tablaInforme">
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Matrícula</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vehiculo, index) in datosUser.vehiculosAsociados" :key="index">
                            <td>{{ vehiculo.marca }}</td>
                            <td>{{ vehiculo.matricula }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <!-- ACCIÓN -->
        <div class="accionesCliente">
            <button class="btnEliminar" type="button" @click="eliminarDatos()">
                Eliminar cliente (y sus vehículos y reparaciones)
            </button>
        </div>
    </section>
</template>