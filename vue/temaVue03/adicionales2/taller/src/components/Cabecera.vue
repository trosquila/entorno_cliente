<script setup>
import '../assets/styles/global.css';
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <h2>Talleres Hernández – Gestión Interna</h2>
        <nav>
            <div>
                <RouterLink to="/panel">Panel</RouterLink>
            </div>
            <div>
                <p>Vehículos</p>
            </div>
            <div>
                <p>Reparaciones</p>
            </div>
            <div>
                <p>Clientes</p>
            </div>
        </nav>
    </header>
</template>