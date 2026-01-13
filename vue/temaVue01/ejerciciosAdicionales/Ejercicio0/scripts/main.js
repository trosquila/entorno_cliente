const { createApp, ref } = Vue;

const app = Vue.createApp({
  setup() {
    let nombre = ref("Luke");
    let apellidos = ref("Skywalker");
    let edad = ref(20);
    let imagen = ref("../img/imgEjemplo.jpg");
    let textoImagen = ref("Foto de Luke Skywalker");
    let estilos = ref(false);
    let enlaces = ref([
      "https://www.starwars.com/",
      "https://starwars.fandom.com/es/wiki/Databank_(sitio_web)",
      "https://www.lafosadelrancor.com/",
    ]);
    let numRandom = ref(getRandomInt());
    return {
      nombre,
      apellidos,
      edad,
      imagen,
      textoImagen,
      estilos,
      enlaces,
      numRandom
    };
  },
});

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}