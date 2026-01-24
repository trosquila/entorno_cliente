const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let formulario = ref({
            titulo: '',
            autor: '',
            numEjemplares: 0
        });

        let memoriaDisponible = ref([]);
        let memoriaPrestado = [];
        let guardarForm = () =>{
            let validar = true;
            if(formulario.value.titulo.trim() == ''){
                validar = false;
                alert('formulario incompleto');
            }
            if(formulario.value.autor.trim() == ''){
                validar = false;
                alert('formulario incompleto');
            }
            if(formulario.value.numEjemplares < 1 || formulario.value.numEjemplares == ''){
                validar = false;
                alert('formulario incompleto');
            }


            if(validar == true){
                const dato = {...formulario.value};

                if(memoriaDisponible.value.length > 0){
                    memoriaDisponible.value.forEach(element => {
                        if(element.titulo == dato.titulo && element.autor == dato.autor){
                            element.numEjemplares += dato.numEjemplares;
                        }else{
                            memoriaDisponible.value.push(dato);
                        }
                    });
                }else{
                    memoriaDisponible.value.push(dato);
                }
            }
                    console.log('form '+ formulario.value);
                    console.log('memoria '+ memoriaDisponible.value);
        }

        
        return {
            formulario,
            memoriaDisponible,
            guardarForm
        };
    },
});
