document.addEventListener('DOMContentLoaded',function(){
    let btn = document.getElementById('enviar').addEventListener('click', comprobarFormulario);
});
function comprobarFormulario(event){
    event.preventDefault();
    let formulario = document.getElementsByTagName('form')[0];
    let camposFormularioParaChequear = []
    formulario = Array.from(formulario);
    formulario.forEach(element => {
        if(element.type == 'text' || element.type == 'radio' || element.tagName == 'TEXTAREA' || element.tagName == 'SELECT'){
            camposFormularioParaChequear.push(element); 
        }
    });
    let camposVacios = [];
    camposFormularioParaChequear.forEach(element => {
        
        console.log(element);
        if(element.type == 'radio'){
            if(element.checked == false){
                if(!camposVacios.includes('tipo')){
                    camposVacios.push(element.name);
                }
            }
        }else{
            if(element.value == ''){
            camposVacios.push(element.name);
            }
        }
    });
    console.log(camposVacios);
    
    if(camposVacios.length > 0){
        alert('Le falta por rellenar: '+camposVacios.join(' '));
    }else{
        mostrarContenidoFormulario(formulario);
    }
}
function mostrarContenidoFormulario(formulario){
    console.log(formulario);
}