<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const estadoBtn = ref(false);

const memoriaNum = ref('');

function validarBtn() {
    if(memoriaNum.value){
        estadoBtn.value = true;
    }else{
        estadoBtn.value = false;
    }
}

function BuscarPorFiltro(event) {
    event.preventDefault();
    router.push({name: 'verArticulo',
        params:{id: memoriaNum.value}
    });
}
</script>

<template>
    <form action="" method="post">
        <div>
            <label for="">Buscar por filtro</label>
            <input type="number" name="nuevoNum" id="" @keyup="validarBtn()" v-model="memoriaNum">
            <button type="submit" v-if="estadoBtn" @click="BuscarPorFiltro($event)">Buscar</button>
            <button type="submit" v-else disabled="">Buscar</button>
        </div>
    </form>
</template>