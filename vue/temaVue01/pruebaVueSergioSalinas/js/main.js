const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let recogerForm = ref({
            prenda: '',
            color: '#000000',
            talla: '',
            precio: 0,
            modificarPrecio: false,
            memoriaModPrecio: 0
        })
        let prendasDisponibles = ref([]);
        let prendasVendidas = ref([]);
        let guardarDatoForm = (event) =>{
            event.preventDefault();
            const prenda = {... recogerForm.value};
            let camposCompletos = true;

            prenda.prenda == ''? camposCompletos = false:'';
            prenda.color == ''? camposCompletos = false:'';
            prenda.talla == ''? camposCompletos = false:'';
            prenda.precio == 0? camposCompletos = false:'';
            
            camposCompletos? prenda.memoriaModPrecio = prenda.precio: '';
            camposCompletos? prendasDisponibles.value.push(prenda): '';
            prendasDisponibles.value.modificarPrecio = false;
        }

        let controlBtnModificar = (index) =>{
            prendasDisponibles.value[index].modificarPrecio = true;
        }

        let controlGuardar = (index) =>{
            prendasDisponibles.value[index].modificarPrecio = false;
            const precio = {... prendasDisponibles.value[index].memoriaModPrecio};
            prendasDisponibles.value[index].precio = precio;
            prendasDisponibles.value[index].memoriaModPrecio = 0;
        }

        let venderPrenda = (index) =>{
            const prenda = {... prendasDisponibles.value[index]};
            
            prendasVendidas.value.push(prenda);
            prendasDisponibles.value.splice(index, 1);

            if(prendasVendidas.value.length > 5){
                prendasVendidas.value.splice(0, 1)
            }
        }

        return {
            recogerForm,
            prendasDisponibles,
            prendasVendidas,
            guardarDatoForm,
            controlBtnModificar,
            controlGuardar,
            venderPrenda
        };
    },
});
