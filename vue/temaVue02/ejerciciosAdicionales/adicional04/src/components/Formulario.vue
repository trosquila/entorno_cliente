<script setup>
import { ref } from 'vue';
const emit = defineEmits(['guardarEnMemoria']);
const datosForm = ref({
    titulo:'',
    genero:'',
    fecha:'',
    comentariosAct: false,
    comentarios: []
});

function guardar(event){
    event.preventDefault();
    const dato = {... datosForm.value};
    emit('guardarEnMemoria', dato);
}

</script>
<template>
    <form action="">
        <div>
            <label for="titulo">Título</label>
            <input type="text" v-model="datosForm.titulo">
        </div>
        <div>
            <label for="genero">Genero de la peli</label>
            <select name="genero" id="genero" v-model="datosForm.genero">
                <option value="terror">Terror</option>
                <option value="accion">Acción</option>
                <option value="romance">Romance</option>
                <option value="historica">Historica</option>
            </select>
        </div>
        <div>
            <label for="fecha">Fecha de estreno</label>
            <input type="date" name="fecha" id="fecha" v-model="datosForm.fecha">
        </div>
        <button type="button" @click="guardar($event)">Guardar</button>
    </form>
</template>