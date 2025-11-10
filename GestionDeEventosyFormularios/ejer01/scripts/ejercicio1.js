/** A continuación se incluyen las distintas sentencias a ejecutar en la consola 
 * para llevar a cabo el ejercicio
 */
//Recupera el elemento con id “apellido1” (dos opciones)
document.getElementById("apellido1");
document.getElementsByTagName("input")[1];

//Recupera todos los párrafos de una vez
document.getElementsByTagName("p");

//Recupera, de una sola vez, todos los párrafos del div con id “seccionTercera”.
document.querySelectorAll("#seccionTercera *"); //Recupera todos los nodos que sean hijos del elemento identificado por seccionTercera

//Recupera todos los elementos de tipo input.
document.getElementsByTagName("input");

//Recupera los elementos de tipo input con nombre “sexo”.
document.getElementsByName("sexo");

//Recupera los elementos de la lista de la clase “par”.
document.querySelectorAll("li.par");
document.getElementsByClassName("par"); //Si se supiera que no hay elementos de otro tipo con esa misma clase asignada