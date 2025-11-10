/**
 * Crea un elemento de tipo h2 con el texto “Lorem Ipsum de nuevo”. 
 * Inclúyelo como primer elemento hijo del div seccionTercera cuando se pulse sobre el primer párrafo 
 * de dicha sección.
 */
function insertarEncabezadoH2() {
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Lorem Ipsum de nuevo";
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = seccionTercera.childNodes[0];
    seccionTercera.insertBefore(nuevoH2, nodoSiguiente);
}

/**
 * El tercer párrafo del div seccionPrimera se colocará justo antes del primer 
 * párrafo(que no tiene por qué ser el primer elemento) del div 
 * seccionTercera(desaparecerá de seccionPrimera).
 */
function cambiarPosicionParrafo() {
    let parrafo = document.querySelectorAll("#seccionPrimera p")[2];
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = document.querySelectorAll("#seccionTercera p")[0];
    seccionTercera.insertBefore(parrafo, nodoSiguiente);
}

/**
 * Crea un div nuevo que se añadirá tras el div seccionSegunda.
 * Clona(con todos sus descendientes) el elemento div que contiene la lista y añádelo como 
 * elemento hijo del nuevo div creado.
 */
function clonarDivLista() {
    let nuevoDiv = document.createElement("div");
    document.body.appendChild(nuevoDiv);

    let divLista = document.getElementById("seccionLista");
    let nuevoDivLista = divLista.cloneNode(true);
    nuevoDiv.appendChild(nuevoDivLista);
}

/**
 * Elimina la última fila de la lista nueva
 */
function eliminarFila() {
    let coleccionListas = document.getElementsByTagName("ul");
    let ultimaLista = coleccionListas[coleccionListas.length - 1];
    let ultimaFila = ultimaLista.lastElementChild;
    ultimaLista.removeChild(ultimaFila);
}