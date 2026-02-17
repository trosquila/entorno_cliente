<script setup>
    import { ref } from 'vue';
    const comentarioNuevo = ref("");
    const props = defineProps(['memoria']);
    const emit = defineEmits(['guardarNuevoComentario']);

    function nuevoComentario(index){
        emit("guardarNuevoComentario", index, comentarioNuevo.value);
    }
</script>
<template>
    <p>{{ memoria.value }}</p>
    <form action="" v-for="(peli, index) in memoria" :key="index">
        <div v-if="peli.comentariosAct == true">
            <p v-for="(comentario, index2) in peli.comentarios" :key="index2">
                {{ comentario }}
            </p>
            <textarea name="comentarioNuevo" id="" v-model="comentarioNuevo">

            </textarea>
            <button type="button" @click="nuevoComentario(index)">Guardar</button>
        </div>
        
    </form>
</template>