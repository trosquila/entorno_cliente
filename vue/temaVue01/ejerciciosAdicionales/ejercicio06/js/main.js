const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let formulario = ref({
            titulo: '',
            autor: '',
            numEjemplares: 0,
            prestados: 0
        });
        let totalDisponible = ref(0);
        let mediaLibros = ref(0);
        let memoriaDisponible = ref([]);

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
                console.log('titulo '+ dato.titulo+' autor '+dato.autor);
                
                const buscarAutor = memoriaDisponible.value.some((element) => element.autor === dato.autor);
                const buscarLibro = memoriaDisponible.value.some((element) => element.titulo === dato.titulo);

                console.log(buscarAutor);
                console.log(buscarLibro);
                
                if(buscarAutor == true && buscarLibro == true){
                    memoriaDisponible.value.forEach(element => {
                        if(element.titulo == dato.titulo && element.nombre == dato.nombre){
                            element.numEjemplares += dato.numEjemplares;
                        }
                    });
                    
                }else{
                    memoriaDisponible.value.push(dato);
                }

                totalDisponible.value += dato.numEjemplares;
                mediaLibros.value = totalDisponible.value / memoriaDisponible.value.length;
            }
        }
        let sacarLibro  = (index) =>{
            if(memoriaDisponible.value[index].prestados == memoriaDisponible.value[index].numEjemplares){
                alert('No quedan ejemplares para prestar');
            }else{
                memoriaDisponible.value[index].prestados += 1;
            }
            
        }
        let devolverLibro  = (index) =>{
            if(memoriaDisponible.value[index].prestados == 0){
                alert('Ya esta todo devuelto');
            }else{
                memoriaDisponible.value[index].prestados -= 1;
            }
            
        }
        return {
            formulario,
            memoriaDisponible,
            totalDisponible,
            mediaLibros,
            guardarForm, 
            sacarLibro,
            devolverLibro
        };
    },
});
