<script setup>  
    defineProps(['propositos']);

    
</script>

<template>
    <h2>lista</h2>
    <ul v-if="propositos.length>0 && !propositos.every(prop=>prop.activo===true)">
            <li v-for="proposito in propositos" :class="{esconder:proposito.activo}">
                <p v-if="proposito.hecho===false" :class="{rojo:true}">{{proposito.texto}}</p>
                <del v-else @dblclick="proposito.activo=true" :class="{verde:true}">{{proposito.texto}}</del>
                <input type="checkbox" v-model="proposito.hecho">
            </li>
        </ul>
    <p v-else>La lista de porpositos está vacía</p>
</template>