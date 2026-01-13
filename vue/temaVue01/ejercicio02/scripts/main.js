const { createApp, ref, reactive } = Vue;

const app = createApp({
    setup() {
        const personas = [
            { dni: "12345678A", nombre: "Laura", apellidos: "García Pérez" },
            { dni: "87654321B", nombre: "Carlos", apellidos: "López Martín" },
            { dni: "11223344C", nombre: "María", apellidos: "Sánchez Ruiz" }
        ];
        const elemento = ref("input");
        const texto = ref("Esto es un texto");

        return {
            elemento,
            texto,
            personas
        };
    }
});
