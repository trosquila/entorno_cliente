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
    let comprobarValueVacio = false;
    camposFormularioParaChequear.forEach(element => {
        if(element.value != ''){ 
            if(element.type == 'radio'){
                if(element.checked == true){
                    comprobarValueVacio == true;
                }
            }else{
                comprobarValueVacio == true;
            }
            
            console.log(element+' '+element.value);
        }
    });
    if(comprobarFormulario === true){
        alert('Rellene todos los campos!!')
    }
}