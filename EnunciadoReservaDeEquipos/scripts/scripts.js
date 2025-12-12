document.addEventListener('DOMContentLoaded', async function inicioPrograma() {
    const datosReservas = await recogerDatosJson();
    imprimirEnSelector(datosReservas);

    const btnReservar = document.getElementById('btnReservar');
    btnReservar.addEventListener('click', terminarForm);

});

async function recogerDatosJson() {
    try {
        const response = await fetch('http://localhost:3000/tiposEquipo');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

function imprimirEnSelector(datosReservas){
    const selector = document.getElementById('equipo');

    datosReservas.forEach(equipoSeleccionado => {
        let option = document.createElement('option');
        option.value= equipoSeleccionado.id;
        option.textContent = equipoSeleccionado.tipo;

        selector.appendChild(option);
    });
}

function terminarForm(event){
        event.preventDefault();

        const textArea = document.getElementById('observaciones');
        textArea.innerHTML  = "";
        let comprobarFuncion = validarFormulario();

        if(comprobarFuncion === true){
            let restul = prepararDatosForm();
            guardarDatosForm(restul);
        }
}


function validarFormulario(){

    let comprobarForm = true;
    let cuadroError = document.getElementById('divErrores');

    const inputs = document.querySelectorAll('input');
    const select = document.getElementById('equipo');
    const textArea = document.getElementById('observaciones');
    
    console.log(inputs);
    
    inputs.forEach(elementos => {
        
        switch (elementos.name) {
            case 'expediente':
                if(elementos.validity.patternMismatch){
                    cuadroError.textContent= elementos.name+' dice: '+elementos.validationMessage;
                    elementos.classList.add('error-input');
                    comprobarForm = false;
                }
                break;
            case 'email':

                if(elementos.validity.patternMismatch){
                    cuadroError.textContent= elementos.name+' dice: '+elementos.validationMessage;
                    elementos.classList.add('error-input');
                    comprobarForm = false;
                }
                if(elementos.validity.valid){
                    cuadroError.textContent= elementos.name+' dice: '+elementos.validationMessage;
                    elementos.classList.add('error-input');
                    comprobarForm = false;
                }
            break;
            case 'equipo':

            break;
            case 'fecha':

            break;
            case 'hora':

            break;
            default:
                break;
        }
        if(elementos.required){
            cuadroError.textContent= elementos.name+' dice: '+elementos.validationMessage;
            elementos.classList.add('error-input');
            comprobarForm = false;
        }
    });
    if(textArea.validity.maxlength){
            cuadroError.textContent= textArea.name+' dice: '+elementos.validationMessage;
            textArea.classList.add('error-input');
            comprobarForm = false;
        }
    return comprobarForm;
}

function prepararDatosForm (){

    const inputs = document.querySelectorAll('input');
    const select = document.getElementById('equipo');
    const textArea = document.getElementById('observaciones');
    let formato ={
        "numExpediente": "",
        "correoE": "",
        "tipoEquipo": "",
        "fecha": "",
        "hora": "",
        "duracion": "",
        "observaciones": ""
    }

        inputs.forEach(elementos => {
            switch (elementos.name) {
                case 'duracion':
                    if(elementos.checked){
                        formato.duracion = elementos.value;
                    }
                    break;
                case 'expediente':
                    formato.numExpediente = elementos.value;
                break;
                case 'email':
                    formato.correoE = elementos.value;
                break;
                case 'equipo':
                    formato.tipoEquipo = elementos.value;
                break;
                case 'fecha':
                    formato.fecha = elementos.value;
                break;
                case 'hora':
                    formato.hora = elementos.value;
                break;

                
                default:
                    break;
        }
    });
    formato.observaciones = textArea.value;
    formato.tipoEquipo = select.value;
    console.log(formato);
    return formato;
}
function guardarDatosForm(restul){
    let URL = "http://localhost:3000/reservas";
    let init = {
    method: 'POST',
    body: JSON.stringify(restul),
    headers: { 'Content-Type': 'application/json'}
    };
    fetch(URL, init)
    .then(response => response.json())
    .then(datosRespuesta => alert(datosRespuesta.id))
    .catch(err => console.error(err)); 
}