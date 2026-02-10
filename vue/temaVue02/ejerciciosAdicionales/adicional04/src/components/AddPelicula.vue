<script setup>
    import {ref} from "vue";
    const emit = defineEmits(['guardarPelicula']);

    const datosForm = ref({
        titulo: '',
        genero: '',
        fechaEstreno:''
    });
function guardar(event){
    event.preventDefault();
    const dato = {... datosForm.value};
    emit('guardarPelicula', dato);
}
</script>
<style>
</style>
<template>
    <form action="">
        <div>
            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" v-model="datosForm.titulo">
        </div>
        <div>
            <label for="genero">Genero</label>
            <select name="genero" id="genero" v-model="datosForm.genero">
                <option value="accion">Acción</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="ciencia">Ciencia</option>
                <option value="ficcion">Ficción</option>
            </select>
        </div>
        <div>
            <label for="estreno">Fecha de estreno</label>
            <input type="date" name="estreno" id="estreno" v-model="datosForm.fechaEstreno">
        </div>
        <div>
            <button type="button" @click="guardar($event)">Guardar</button>
        </div>
    </form>
</template>