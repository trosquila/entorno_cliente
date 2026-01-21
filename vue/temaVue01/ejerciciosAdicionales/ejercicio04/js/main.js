const { createApp, ref } = Vue;

const app = Vue.createApp({
    setup() {
        let contra = ref({
            password: '',
            hiddenPassword: '',
            oculto: false
        })

        let actualizarHiddenEnNormal = () =>{
            contra.value.hiddenPassword += '*';
            console.log('si '+contra.value.hiddenPassword);
            
        }
        let borrarHidden =()=> {
            contra.value.hiddenPassword = contra.value.hiddenPassword.slice(0, contra.value.hiddenPassword.length -1);
            console.log('borrar2 '+contra.value.hiddenPassword);
        }
        let ocultarPassword = () =>{
            contra.value.oculto = !contra.value.oculto;
        }

        let actualizarHidden =(e) =>{
            if(e.key != 'Enter' && e.key != 'Backspace' && e.key != ' '){
                contra.value.hiddenPassword = contra.value.hiddenPassword.slice(0, contra.value.hiddenPassword.length -1);
                contra.value.password += e.key;
                contra.value.hiddenPassword += '*';
            }
            
        }
        let borrarNormal =()=>{
            contra.value.password = contra.value.password.slice(0, contra.value.password.length -1);
        }
        return {
            contra,
            actualizarHiddenEnNormal,
            actualizarHidden,
            borrarHidden,
            ocultarPassword,
            borrarNormal
        };
    },
});