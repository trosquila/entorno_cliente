/** A continuación se incluyen las distintas sentencias a ejecutar en la consola 
 * para llevar a cabo el ejercicio
 */
//Recupera el primer párrafo que hay dentro del div "seccionPrimera".
let nodoPadre = document.getElementById("seccionPrimera");
let nodoPrimerHijo = nodoPadre.firstElementChild;

//Recupera el tercer párrafo del div anterior.
let tercerHijo = (nodoPadre.children)[2];

//El último elemento de la lista.
let lista = document.getElementsByTagName("ul")[0];
let ultimaFila = lista.lastElementChild;

//La label del input nombre.
let nodoInput = document.getElementById("nombre");
let labelInput = nodoInput.previousElementSibling;
let valorLabel = labelInput.firstChild; //devuelve el contenido de la label, ya que su primer hijo es un nodo de tipo texto