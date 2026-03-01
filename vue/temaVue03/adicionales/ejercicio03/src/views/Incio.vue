<script setup>
import { ref } from 'vue';

const sesion = localStorage.getItem('edad');
const dataForm = ref('');
function iniciarSesion(event) {
    event.preventDefault();
    const edad = dataForm.value;
    localStorage.setItem('edad', edad);
}
</script>
<template>
    <div>
        <h2>Inicio</h2>
        <div v-if="sesion">
            <h3>Bienvenido usuario</h3>   
        </div>
        <div v-else>
            <form action="">
                <label for="">Inserte su edad</label>
                <input type="number" name="edad" id="" v-model="dataForm">
                <button type="submit" @click="iniciarSesion($event)">Guardar</button>
            </form>
        </div>
    </div>
    
</template>