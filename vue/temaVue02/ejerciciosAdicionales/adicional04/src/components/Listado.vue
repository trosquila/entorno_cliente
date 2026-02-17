<script setup>
import { ref } from 'vue';
const props = defineProps(['memoria']);
const emit = defineEmits(['guardarCambiosFecha','guardarCambiosTitulo', 'activarComentario']);

const editar = ref(false);
const editarTitulo = ref(false);
const modificarDato = ref({
    titulo:'',
    fecha:''
});



function activarEdicion (){
    editar.value = true;
}

function activarEdicionTitulo(){
    editarTitulo.value = true;
}

function guardarCambioFecha(event, index) {
    if(event.key == "Enter"){
        emit("guardarCambiosFecha", index, modificarDato.value.fecha);
    }
    editar.value = false;
}

function guardarCambiosTitulo(event, index) {
    if(event.key == "Enter"){
        emit("guardarCambiosTitulo", index, modificarDato.value.titulo);
        editarTitulo.value = false;
    }
    
}
function elegirColor(genero) {
    if(genero == 'accion'){
        return 'verde';
    }
    
}

function activarComentarios(index){
    emit('activarComentario', index);
}
</script>
<style>
.verde{
    color: green;
}
</style>
<template>
    <ul>
        <li v-for="(peli, index) in memoria" :key="index" :class="elegirColor(peli.genero)">
            <p v-if="editarTitulo == false" @dblclick="activarEdicionTitulo()">{{ peli.titulo }}</p>
            <input v-else type="text" name="titulo" id=""v-model="modificarDato.titulo" @keypress="guardarCambiosTitulo($event, index)">
            
            <ul>
                <li>{{ peli.genero }}</li>
                <li v-if="editar == false" @dblclick="activarEdicion()">{{ peli.fecha }}</li>
                <li v-else><input type="Date" name="fecha" id="" v-model="modificarDato.fecha" @keypress="guardarCambioFecha($event, index)"></li>
                <li><button @click="activarComentarios(index)">Poner comentario</button></li>
            </ul>
        </li>
    </ul>
</template>