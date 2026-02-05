<script setup>
import { computed } from 'vue';

  
    const props = defineProps(['propositos']);
    let lista = computed (()=>{
        return props.propositos.filter(element => element.hecho == true);
    }) 
    
</script>
<style>
    .h2Tabla{
        background-color: rgb(247, 71, 238);
    }
    .textoTabla{
        font-family: fantasy !important;
    }
</style>
<template>
    <div class="textoTabla">
        <h2 class="h2Tabla">Tabla propositos</h2>
    <table v-if="lista.length>0">
        <thead>
            <tr>
                <th>Texto</th>
                <th>Hecho</th>
                <th>Activo</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="(proposito, index) in lista" :key="index" >
                
                <td>{{ proposito.texto}}</td>
                <td>{{proposito.hecho}}</td>
                <td>{{proposito.activo}}</td>
            </tr>
        </tbody>
        
    </table>
    <p v-else>La tabla de porpositos cumplidos está vacía</p>
    </div>
    
</template>