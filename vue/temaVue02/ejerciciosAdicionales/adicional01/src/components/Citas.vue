<script  setup>
        defineProps(['listadoCitas']);
        
</script>
<template>
    <div>
        <h3>Listado de citas</h3>
        <ul >
            <li v-for="(lista, index) in listadoCitas" :key="index">{{lista}}: {{ lista }}</li>
        </ul>
    </div>
</template>