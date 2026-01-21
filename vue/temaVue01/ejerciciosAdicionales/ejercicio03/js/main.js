const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let imagenes = ref([
                                {
                                    id: 1,
                                    nombre: 'imagen01',
                                    url: 'img/frieren01.jpg',
                                    contador: 0
                                },{
                                    id: 2,
                                    nombre: 'imagen02',
                                    url: 'img/frieren02.jpg',
                                    contador: 0
                                },{
                                    id: 3,
                                    nombre: 'imagen03',
                                    url: 'img/frieren03.jpg',
                                    contador: 0
                                },{
                                    id: 4,
                                    nombre: 'imagen04',
                                    url: 'img/frieren04.png',
                                    contador: 0
                                },{
                                    id: 5,
                                    nombre: 'imagen05',
                                    url: 'img/frieren05.png',
                                    contador: 0
                                },{
                                    id: 6,
                                    nombre: 'imagen06',
                                    url: 'img/frieren06.png',
                                    contador: 0
                                }
                            ]);

        let bordes = ref([false,false,false,false,false,false]);
        let nuevoNombre = ref(['','','','','','']);
        let nuevaURL = ref(['','','','','','']);

        let cambioBorde = (index) =>{
            bordes.value[index] = !bordes.value[index];
        }

        let sumarInteraccion =(index) =>{
            imagenes.value[index].contador++; 
        }

        let actualizarNombre = (index) =>{
            imagenes.value[index].nombre = nuevoNombre.value[index];
            nuevoNombre.value[index] = '';

        }
        let actualizarURL = (index) =>{
            imagenes.value[index].url = nuevaURL.value[index];
            nuevaURL.value[index] = '';
            imagenes.value[index].contador = 0;
        }

        return {
            imagenes,
            bordes,
            nuevoNombre,
            nuevaURL,
            cambioBorde,
            sumarInteraccion,
            actualizarNombre,
            actualizarURL
        };
    },
});