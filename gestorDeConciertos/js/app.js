/*
GENERAL
*/
document.addEventListener('DOMContentLoaded', function inicioPrograma(){
    let identificarArtistas = document.getElementById('gestionArtistas');
    identificarArtistas.addEventListener('click', gestorArtistas);
    
    let gestorConciertos = document.getElementById('GestionConciertos')
    gestorConciertos.addEventListener('click', gestorConciertos);
    
    let verInfo = document.getElementById('VerInfo');
    verInfo.addEventListener('click', gestorVerInfo);
});

function verificarContenedorLimpio(){
    const contenedorDatos = document.getElementById('contenedorDatos');
    if(contenedorDatos != null){
        contenedorDatos.remove();
    }
}

function generalContenedorDatos(){
    const contenedorContenidoGeneral = document.getElementById('contenido');

    const contenedorDatos = document.createElement('div');
    contenedorDatos.id = 'contenedorDatos';
    contenedorContenidoGeneral.appendChild(contenedorDatos);
    contenedorDatos.classList.add('contenedorDatos');
}
/*
VER INFO
*/
async function gestorVerInfo() {
    verificarContenedorLimpio();
    generalContenedorDatos();

    const contenedorSelect = document.createElement('div');
    contenedorSelect.id = 'contenedorSelect';
    contenedorDatos.appendChild(contenedorSelect);
    contenedorSelect.classList.add('contenedorSelect');
    
    const labelSelect = document.createElement('label');
    labelSelect.textContent = 'Artistas: ';
    contenedorSelect.appendChild(labelSelect);
    labelSelect.classList.add('labelSelect');

    const select = document.createElement('select');
    select.name = 'listaArtistas';
    select.id = 'listaArtistas';
    contenedorSelect.appendChild(select);
    select.addEventListener('change', actualizarTabla);

    const listaArtistas = await obtenerArtistas();

    const option1 = document.createElement('option');
    option1.value ='';
    option1.textContent = 'Seleccione un artista';
    select.appendChild(option1);

    listaArtistas.forEach(element => {
        const option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.nombre;

        select.appendChild(option);
    });

    crearTabla();
}

function crearTabla(){
    const contenidoCabeceras = ['Concierto','Lugar','Fecha'];
    const contenedorDatos = document.getElementById('contenedorDatos');

    const tabla = document.createElement('table');
    tabla.id = 'tablaArtista';
    contenedorDatos.appendChild(tabla);

    const cabecera = document.createElement('tr');
    cabecera.id = 'cabeceraTabla';
    tabla.appendChild(cabecera);
    contenidoCabeceras.forEach(element => {
        const th = document.createElement('th');
        th.textContent = element;
        cabecera.appendChild(th);
        
    });
}

async function actualizarTabla() {
    borrarTablaSecundaria()
    const conciertos = await datosParaTabla(this.value);
    const conciertosOrdenados = ordenarConciertosTablaPrincipal(conciertos);
    limpiarTabla();
    
    const tabla = document.getElementById('tablaArtista');
    conciertosOrdenados.forEach(element => {
        const tr = document.createElement('tr');
        tabla.appendChild(tr);
        const td1 = document.createElement('td');
        td1.textContent = element.título;
        tr.appendChild(td1);
        tr.id = element.artistaId;
        tr.addEventListener('click', gestionTablaSecundaria);

        const td2 = document.createElement('td');
        td2.textContent = element.lugar;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = element.fecha;
        tr.appendChild(td3);
    });
}

async function datosParaTabla(id){
    const conciertos = await obtenerConciertos();
    const filtrarConciertos = [];

    conciertos.forEach(element => {
        element.artistaId == id? filtrarConciertos.push(element):'';
    });
    
    return filtrarConciertos;
}

function limpiarTabla() {
    const tabla = document.getElementById('tablaArtista');
    
    const filas = tabla.querySelectorAll('tr');
    filas.forEach(fila => {
        if(fila.id != 'cabeceraTabla'){
            fila.remove();
        }
    });

}

function ordenarConciertosTablaPrincipal(conciertos){
    let fechaActual = new Date();
    fechaActual = fechaActual.toISOString();
    let fecha = fechaActual.substring(0, 10);
    let conciertosFuturos = [];
    conciertos.forEach(element => {
        if(element.fecha > fecha){
            conciertosFuturos.push(element);
        }
    });
    //slice
    conciertosFuturos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    return conciertosFuturos
}

async function gestionTablaSecundaria(){
    const tablaSecundaria = document.getElementById('tablaSecundaria');

    if(tablaSecundaria === null){
        const conciertos = await obtenerConciertos();
        crearTablaSecundaria(conciertos, this.id);
    }else{
        borrarTablaSecundaria();
    }
}

function crearTablaSecundaria(conciertos, idArtista){
    const conciertosFiltrados = filtrarYordenarConciertosSecundario(conciertos, idArtista);
    const contenedorDatos = document.getElementById('contenedorDatos');
    const contenidoCabeceras = ['Concierto','Lugar','Fecha'];

    const tabla = document.createElement('table');
    tabla.id = 'tablaSecundaria';
    contenedorDatos.appendChild(tabla);

    const cabecera = document.createElement('tr');

    tabla.appendChild(cabecera);
    contenidoCabeceras.forEach(element => {
        const th = document.createElement('th');
        th.textContent = element;
        cabecera.appendChild(th);
        
    });
    conciertosFiltrados.forEach(element => {
        const tr = document.createElement('tr');
        tabla.appendChild(tr);
        const td1 = document.createElement('td');
        td1.textContent = element.título;
        tr.appendChild(td1);
        tr.id = element.artistaId;

        const td2 = document.createElement('td');
        td2.textContent = element.lugar;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = element.fecha;
        tr.appendChild(td3);
    });
}

function filtrarYordenarConciertosSecundario(conciertos, idArtista) {
    let fechaActual = new Date();
    fechaActual = fechaActual.toISOString();
    let fecha = fechaActual.substring(0, 10);
    let conciertosPasados= [];
    
    conciertos.forEach(element => {
        if(element.fecha < fecha && element.artistaId == idArtista){
            conciertosPasados.push(element);
        }
    });
    conciertosPasados.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    
    return conciertosPasados
}

function borrarTablaSecundaria(){
    const tabla = document.getElementById('tablaSecundaria');
    if(tabla != null){
        tabla.remove();
    }
}
/*
ARTISTAS
*/

function gestorArtistas() {
    verificarContenedorLimpio();
    generalContenedorDatos();
    generarFormularioArtistas();
}

async function generarFormularioArtistas(){
    const opcionesSelect = [
        {id: 0, accion: 'Dar alta'},
        {id:1, accion: 'Dar baja'},
        {id:2, accion: 'Modificar'},
    ];

    
    const contenedorDatos = document.getElementById('contenedorDatos');
    
    const formulario = document.createElement('form');
    formulario.classList.add('formularioArtistas');
    formulario.id = 'formArtistas';
    contenedorDatos.appendChild(formulario);

    const labelOpcionesForm = document.createElement('label');
    labelOpcionesForm.textContent = 'Seleccione una opción';
    formulario.appendChild(labelOpcionesForm);

    const selectAccion = document.createElement('select');
    selectAccion.id = 'selectAccion';
    selectAccion.addEventListener('change', ajustarFormularioArtistas);
    opcionesSelect.forEach(element => {
        let option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.accion;

        selectAccion.appendChild(option);
    });
    formulario.appendChild(selectAccion);
    //fuerza primera entrada para crear formulario
    ajustarFormularioArtistas();


}

function ajustarFormularioArtistas(){
    const selectOpciones = document.getElementById('selectAccion');
    console.log(selectOpciones.value);
    
    ajustarFormArtistas();
    if(selectOpciones.value == 0 || selectOpciones.value == null){
        darAltaArtista();
        console.log('alta');
        
    }else{
        darBajaArtista();
        console.log('baja');
        
    }
}

async function darBajaArtista() {
    const formulario = document.getElementById('formArtistas');
    formulario.noValidate = true;

    const artistas = await obtenerArtistas();
    
    const labelNombre = document.createElement('label');
    labelNombre.textContent = 'Nombre del artista: ';
    labelNombre.id = 'labelNombre';
    formulario.appendChild(labelNombre);
        
    const selectArtistas = document.createElement('select');
    selectArtistas.name = 'nombreArtista';
    selectArtistas.id = 'nombreArtista';
    artistas.forEach(element => {
        let option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.nombre;
        selectArtistas.appendChild(option);
    });



    formulario.appendChild(selectArtistas);

    const btnForm = document.createElement('input');
    btnForm.type = 'button';
    btnForm.value = 'Dar de baja';
    btnForm.classList.add('btnFormArtistas')
    btnForm.addEventListener('click', eliminarArtista);
    formulario.appendChild(btnForm);
}

async function darAltaArtista(){
    const formulario = document.getElementById('formArtistas');

    const generosMusicales = await obtenerGenerosMusicales();
    const nacionalidades = await obtenerNacionalidades();
    
    const labelNombre = document.createElement('label');
    labelNombre.textContent = 'Nombre del artista: ';
    labelNombre.id = 'labelNombre';
    formulario.appendChild(labelNombre);

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.name = 'nombreArtista';
    inputNombre.id = 'nombreArtista';
    inputNombre.required = true;
    inputNombre.maxLength = 55;
    formulario.appendChild(inputNombre);

    const labelGeneroMusical = document.createElement('label');
    labelGeneroMusical.textContent = 'Género musical';
    formulario.appendChild(labelGeneroMusical);

    const selectGenero = document.createElement('select');
    selectGenero.id = 'selectGenero';
    selectGenero.required = true;
    formulario.appendChild(selectGenero);

    generosMusicales.forEach(element => {
        let option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.nombre;
        selectGenero.appendChild(option);
    });

    const labelNacionalidad = document.createElement('label');
    labelNacionalidad.textContent = 'Nacionalidad:';
    formulario.appendChild(labelNacionalidad);

    const selectNacionalidad = document.createElement('select');
    selectNacionalidad.id = 'selectNacionalidad';
    selectNacionalidad.required = true;
    formulario.appendChild(selectNacionalidad);

    nacionalidades.forEach(pais => {
        
            let option = document.createElement('option');
            option.value = pais.country;
            option.textContent = pais.country;
            selectNacionalidad.appendChild(option);
    });
    
    const labelYearInicio = document.createElement('label');
    labelYearInicio.textContent = 'Año de inicio:';
    formulario.appendChild(labelYearInicio);

    const inputYearInicio = document.createElement('input');
    inputYearInicio.id = 'yearInicio';
    inputYearInicio.type = 'date';
    inputYearInicio.required = true;
    inputYearInicio.max = new Date().toISOString().split("T")[0];
    
    formulario.appendChild(inputYearInicio);

    const btnForm = document.createElement('input');
    btnForm.type = 'button';
    btnForm.value = 'Dar de alta';
    btnForm.classList.add('btnFormArtistas');
    btnForm.addEventListener('click', guardarAltaArtista);
    formulario.appendChild(btnForm);
}

function ajustarFormArtistas(){
    const formulario = document.getElementById('formArtistas');
    const contenidoForm = formulario.querySelectorAll('label, input, select');
    let contador = 0;
    contenidoForm.forEach(element => {
        if(contador > 1){
            element.remove();
        }else{
            contador++;
        }
    });
}

function recogerDatosFormularioArtistas(){
    const validarForm = validarFormInsertarArtista();
    if(validarForm === true){
        let datosForm = {
        nombre: '',
        generoMusicalId: '',
        pais: '',
        anioInicio: ''
    };

    datosForm.nombre = document.getElementById('nombreArtista').value;
    datosForm.generoMusicalId = document.getElementById('selectGenero').value;
    datosForm.pais = document.getElementById('selectNacionalidad').value; 
    datosForm.anioInicio = document.getElementById('yearInicio').value;

    return datosForm;
    }

    return validarForm;
    
}

function validarFormInsertarArtista() {
    let errores = [];
    const nombre = document.getElementById('nombreArtista');
    const generoMusicalId = document.getElementById('selectGenero');
    const pais = document.getElementById('selectNacionalidad');
    const anioInicio = document.getElementById('yearInicio');

    if(nombre.validity.tooLong){
        validar = false;
        console.log('longiturd '+nombre.validationMessage);
        errores.push(
            {
                element: 'Nombre',
                error: nombre.validationMessage
            }
        );
    }
    if(nombre.validity.valueMissing){
        validar = false;
        errores.push(
            {
                element: 'Nombre',
                error: nombre.validationMessage
            }
        );
        
    }

    if(generoMusicalId.validationMessage){
        validar = false;
        errores.push(
            {
                element: 'Genero Musical',
                error: nombre.validationMessage
            }
        );
        
    }

    if(pais.validity.valueMissing){
        validar = false;
        errores.push(
            {
                element: 'País',
                error: nombre.validationMessage
            }
        );
        
    }

    if(anioInicio.validity.valueMissing){
        validar = false;
        errores.push(
            {
                element: 'Año de inicio',
                error: nombre.validationMessage
            }
        );
    }

    if(anioInicio.validity.rangeOverflow){
        validar = false;
        errores.push(
            {
                element: 'Año de inicio',
                error: nombre.validationMessage
            }
        );
    }
    return errores;
}
/*
CONSULTAS
*/
async function obtenerArtistas() {
    try {
        const response = await fetch('http://localhost:3000/artistas');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

async function obtenerGenerosMusicales() {
    try {
        const response = await fetch('http://localhost:3000/generosMusicales');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

async function obtenerConciertos() {
    try {
        const response = await fetch('http://localhost:3000/conciertos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

async function obtenerNacionalidades(){
        try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const data = await response.json();
        
        return data.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}


async function guardarAltaArtista() {
    const datosForm = recogerDatosFormularioArtistas();
}

async function eliminarArtista() {
    
}