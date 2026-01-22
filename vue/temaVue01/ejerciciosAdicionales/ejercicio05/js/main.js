const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let contador = ref({
            tiempoMin: 45,
            tiempoSeg: 0,
            activo: false
        });


        let activarContador = () =>{
            contador.value.activo = true;
            setInterval(() =>{
                contador.value.tiempoSeg --;
                if(contador.value.tiempoMin == 0 && contador.value.tiempoSeg == 0){
                    contador.value.activo = false;
                    clearInterval(activarContador);
                }else{
                    if(contador.value.tiempoSeg < 0){
                        contador.value.tiempoSeg = 59;
                        contador.value.tiempoMin--;
                    }
                }
                
                        
            },1000);
        }

        let pararContador = () =>{
            contador.value.activo = false;
            clearInterval(activarContador);
        }
        return {
            contador,
            activarContador,
            pararContador
        };
    },
});