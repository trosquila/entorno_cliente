const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let contador = ref({
            tiempoMin: 1,
            tiempoSeg: 0,
            activo: false,
            controlBtnActivo: false,
            descanso: false,
            mensaje01: 'Deberías trabajar',
            mensaje02: 'Deberías descansar'
        });

        let mando = '';
        let activarContador = () =>{
            contador.value.activo = true;
            if(contador.value.controlBtnActivo == false){
                mando = setInterval(() =>{
                    contador.value.tiempoSeg --;
                    if(contador.value.tiempoMin == 0 && contador.value.tiempoSeg == 0){
                        contador.value.tiempoMin = 1;
                        contador.value.descanso = true;
                    }else{
                        if(contador.value.tiempoSeg < 0){
                            contador.value.tiempoSeg = 59;
                            contador.value.tiempoMin--;
                        }
                    }
                    contador.value.controlBtnActivo = true;        
                },1000);
            }
        }

        let pararContador = () =>{
            contador.value.activo = false;
            contador.value.controlBtnActivo = false;
            clearInterval(mando);
        }

        let reiniciar =() =>{
            if(contador.value.activo == false){
                contador.value.tiempoMin = 45;
                contador.value.tiempoSeg = 0;
            }
        }
        return {
            contador,
            activarContador,
            pararContador,
            reiniciar
        };
    },
});