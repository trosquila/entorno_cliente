<script setup>
import { ref } from 'vue';

const estadoBtn = ref(false);

const memoriaNum = ref('');

function validarBtn() {
    if(memoriaNum.value){
        estadoBtn.value = true;
    }else{
        estadoBtn.value = false;
    }
}
</script>

<template>
    <form action="" method="post">
        <div>
            <label for="">Buscar por filtro</label>
            <input type="number" name="nuevoNum" id="" @keyup="validarBtn()" v-model="memoriaNum">
            <button type="submit" v-if="estadoBtn">Guardar</button>
            <button type="submit" v-else disabled="">Guardar</button>
        </div>
    </form>
</template>