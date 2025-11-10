/**
 * Soluciones a todos los puntos del ejercicio 3.
 * Para que funcione el partado de las funciones habría que comentar las líneas 
 * de los ejercicios que se prueban por consola
 */

//Recupera el innerHTML del elemento ul y el textContent de dicha etiqueta
let contenido = (document.getElementsByTagName("ul"))[0].innerHTML;
let contenidoTexto = (document.getElementsByTagName("ul"))[0].textContent;
/*contenido contendrá todo lo que hay entre <ul> y </ul>, mientras que 
    contenidoTexto contendrá solo los textos de la lista.
*/

//Recupera el valor del primero input radio de sexo.
let nodoRadio1 = (document.getElementsByName("sexo"))[0];
let valor = nodoRadio1.value;

//Busca como recuperar el valor del sexo que está seleccionado.
let formulario = document.getElementsByTagName("form")[0];
let sexoSeleccionado = formulario.sexo.value; //Otra forma sería recuperando todos los elementos de nombre sexo y recorrerlos para ver cual tiene el atributo checked

/**
 * Las funciones que se detallan a continuación son las que irían en el documento trabajarConDom.js
 */
function aceptar() {
    let nodoNombre = document.getElementById("nombre");
    nodoNombre.focus();
}

function cancelar() {
    let nodoNombre = document.getElementById("nombre");
    nodoNombre.blur();
}