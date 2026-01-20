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
        console.log(cliente);
        
        
        return {
            cliente
        };
    },
});

const manejoTabla = Vue.createApp({
    setup(){
        const patata = 1;
        return{
            patata
        };
    }
});