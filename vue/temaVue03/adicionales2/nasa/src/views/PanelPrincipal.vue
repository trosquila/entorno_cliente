<script setup>
    import '../assets/styles/global.css';
    let fechaActutal = new Date();
    const fechaMostrar = fechaActutal.getDate()+'/'+(fechaActutal.getMonth() + 1)+'/'+fechaActutal.getFullYear();
</script>
<template>
    <section class="fechaHoy">
        <h3>Día actual: {{ fechaMostrar }}</h3>
    </section>
</template>