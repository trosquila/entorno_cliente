<script setup>
import { ref } from 'vue';
import '../assets/styles/global.css';
import { getClientes, getVehiculos, getReparaciones } from '../assets/js/consultas.js'

const datoForm = ref({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: 0,
    email: ''
})

const nombreRef = ref(null)
const apellidosRef = ref(null)
const dniRef = ref(null)
const telefonoRef = ref(null)
const emailRef = ref(null)


function guardarNuevoCliente() {
    const nombreInput = nombreRef.value

    nombreInput.validity.valueMissing ? alert('vacio') : alert('con datos')
}
</script>
<template>
    <section class="registroCliente">
        <article class="informe">
            <h3 class="tituloInforme">Registrar cliente</h3>

            <form class="formCliente" novalidate>
                <div class="grupo">
                    <label class="etiqueta" for="nombre">Nombre</label>
                    <input ref="nombreRef" class="campo" id="nombre" name="nombre" type="text" placeholder="Ej: Laura"
                        required v-model="datoForm.nombre" />
                </div>

                <div class="grupo">
                    <label class="etiqueta" for="apellidos">Apellidos</label>
                    <input ref="apellidosRef" class="campo" id="apellidos" name="apellidos" type="text"
                        placeholder="Ej: Gómez Ruiz" required v-model="datoForm.apellido" />
                </div>

                <div class="grupo">
                    <label class="etiqueta" for="dni">DNI</label>
                    <input ref="dniRef" class="campo" id="dni" name="dni" type="text" placeholder="Ej: 12345678A"
                        required v-model="datoForm.telefono" />
                </div>

                <div class="grupo">
                    <label class="etiqueta" for="telefono">Teléfono</label>
                    <input ref="telefonoRef" class="campo" id="telefono" name="telefono" type="tel"
                        placeholder="Ej: 600123456" required v-model="datoForm.telefono" />
                </div>

                <div class="grupo">
                    <label class="etiqueta" for="email">Email</label>
                    <input ref="emailRef" class="campo" id="email" name="email" type="email"
                        placeholder="Ej: laura@email.com" required v-model="datoForm.email" />
                </div>

                <div class="accionesForm">
                    <button class="btnSecundario" type="reset">Limpiar</button>
                    <button class="btnPrimario" type="submit" @click.prevent="guardarNuevoCliente()">
                        Guardar cliente
                    </button>
                </div>
            </form>
        </article>
    </section>
</template>