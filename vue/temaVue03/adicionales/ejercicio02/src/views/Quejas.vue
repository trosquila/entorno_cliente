<script setup>
import { ref } from 'vue';


const datosForm = ref({
    nombre:'',
    apellidos:'',
    edad:0,
    correo:'',
    sugerencia:''
})

let memoria = ref([]);
function nuevaQueja(event) {
    event.preventDefault();
    const dato = {...datosForm.value};
    memoria.value.push(dato);
}
</script>
<template>
    <div>

    
        <form>
            <div>
                <label for="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" v-model="datosForm.nombre" required />
            </div>

            <div>
                <label for="apellidos">Apellidos</label>
                <input id="apellidos" name="apellidos" type="text" v-model="datosForm.apellidos" required />
            </div>

            <div>
                <label for="edad">Edad</label>
                <input id="edad" name="edad" type="number" min="0" v-model="datosForm.edad" required />
            </div>

            <div>
                <label for="correo">Correo electrónico</label>
                <input id="correo" name="correo" type="email" v-model="datosForm.correo" required />
            </div>

            <div>
                <label for="sugerencia">Sugerencia</label>
                <textarea id="sugerencia" name="sugerencia" rows="4" v-model="datosForm.sugerencia" required></textarea>
            </div>

            <button type="submit" @click="nuevaQueja($event)">Enviar</button>
        </form>
        <hr>
        <div v-if="memoria.length == 0">
            <p>¡Todavía no hay quejas!</p>
        </div>
        <div v-else>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Queja</th>
                </tr>
                <tr v-for="(user, index) in memoria" :key="index">
                    <td>{{user.nombre}} {{user.apellidos }}</td>
                    <td>{{user.edad}}</td>
                    <td>{{user.sugerencia}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>