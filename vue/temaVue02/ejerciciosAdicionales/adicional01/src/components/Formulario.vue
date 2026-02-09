<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['guardarCita'])
    let nuevoDato = ref({
        dia: '',
        cita:''
    });

    function procesoGuardado(event){
        event.preventDefault();

        emit('guardarCita', nuevoDato.value);
    }
</script>
<template>
    <form action="">
        <div>
            <label for="">Día del mes</label>
            <input type="date" name="dia" id="" min="2021-02-01" max="2021-02-28" v-model="nuevoDato.dia">
        </div>
        <div>
            <label for="">Cita</label>
            <input type="text" name="cita" id="" maxlength="75" v-model="nuevoDato.cita">
        </div>
        <button type="submit" @click="procesoGuardado($event)">Guardar Cita</button>
    </form>
</template>