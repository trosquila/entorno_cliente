document.addEventListener('DOMContentLoaded', function inicioPrograma(){
    let identificarArtistas = document.getElementById('gestionArtistas');
    identificarArtistas.addEventListener('click', gestorArtistas);
    
    let gestorConciertos = document.getElementById('GestionConciertos')
    gestorConciertos.addEventListener('click', gestorConciertos);
    
    let verInfo = document.getElementById('VerInfo');
    verInfo.addEventListener('click', gestorVerInfo);
});

async function gestorArtistas() {
    verificarContenedorLimpio();

    const contenedorContenido = document.getElementById('contenido');

    const contenedorDatos = document.createElement('div');
    contenedorDatos.id = 'contenedorDatos';
    contenedorContenido.appendChild(contenedorDatos);
    contenedorDatos.classList.add('contenedorDatos')

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

async function gestorVerInfo() {

}

function verificarContenedorLimpio(){
    const contenedorDatos = document.getElementById('contenedorDatos');
    if(contenedorDatos != null){
        contenedorDatos.remove();
    }
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
    console.log(conciertos);
    conciertos.forEach(element => {
        element.artistaId == id? filtrarConciertos.push(element):'';
    });
    console.log(filtrarConciertos);
    
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

    borrarTablaSecundaria();
    const conciertos = await obtenerConciertos();
    crearTablaSecundaria(conciertos, this.id);

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
    console.log(conciertos);
    
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



