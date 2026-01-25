const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let recogerDatosForm = ref({
            titulo: '',
            categoria: '',
            minutosEstimados: '',
            prioridad: '',
            estado: false,
            bloquearBtnRestarTiempo: false
        });
        let memoriaDatos = ref([]);
        let errorForm = ref(false);

        let guardarDatosForm = (event) =>{
            event.preventDefault();
            let dato = {... recogerDatosForm.value};
            if(dato.titulo == '' || dato.minutosEstimados < 1){
                errorForm.value = true;
                
            }else{
                errorForm.value = false;
                const existeDato = memoriaDatos.value.some((element) => element.titulo == dato.titulo);
                
                if(existeDato){
                    memoriaDatos.value.forEach(element => {
                        element.titulo == dato.titulo ? element.minutosEstimados+= 5 : ''; 
                    });
                }else{
                    memoriaDatos.value.push(dato);
                }
            }
        }
        let sumarTiempo = (index) =>{
            memoriaDatos.value[index].minutosEstimados += 5;
            memoriaDatos.value[index].bloquearBtnRestarTiempo == true? memoriaDatos.value[index].bloquearBtnRestarTiempo = false:'';
        }
        let restarTiempo = (index) =>{
            if(memoriaDatos.value[index].minutosEstimados < 1){
            memoriaDatos.value[index].bloquearBtnRestarTiempo = true;
            }else{
                memoriaDatos.value[index].minutosEstimados -= 5;
                memoriaDatos.value[index].minutosEstimados < 1? memoriaDatos.value[index].minutosEstimados = 0: '';
                memoriaDatos.value[index].minutosEstimados < 1? memoriaDatos.value[index].bloquearBtnRestarTiempo = true: '';
            }
        }
            return {
            recogerDatosForm,
            memoriaDatos,
            errorForm,
            guardarDatosForm,
            sumarTiempo,
            restarTiempo
        };
    },
});
