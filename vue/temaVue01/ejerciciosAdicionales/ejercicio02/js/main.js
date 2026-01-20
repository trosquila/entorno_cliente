const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        const cliente = ref ({
            nombre: "Diego",
            apellidos: "González Serrano",
            direccion: "Alfonso X 17 5ºD",
            telefono: 654123987,
            estadoCivil: "casado",
            productos: [{
            id: 1,
            nombre: 'Cuenta Nómina',
            saldo: 3597
            },
            {
            id: 2,
            nombre: 'Plan de Pensiones',
            saldo: 25432
            },
            {
            id: 3,
            nombre: 'Fondo de Inversión',
            saldo: 65198
            }
            ] 
        });
        
        let lista = cliente.value.productos.slice();
        console.log(lista);
        
        const modificarPrecio = ref([]);
        lista.forEach(element => {
            modificarPrecio.value.push({id: element.id, 'valor': 0})
        });
        let ingresar = (id) =>{
            let p = id -1;
            cliente.value.productos[p].saldo +=  modificarPrecio.value[p].valor;
        }
        let sacar =(id) =>{
            let p = id -1;
            if((cliente.value.productos[p].saldo - modificarPrecio.value[p].valor) < 0){
                alert('te quedas en negativo socio');
            }else{
                cliente.value.productos[p].saldo -=  modificarPrecio.value[p].valor;
            }
        }
        return {
            cliente,
            ingresar,
            sacar,
            modificarPrecio
        };
    },
});