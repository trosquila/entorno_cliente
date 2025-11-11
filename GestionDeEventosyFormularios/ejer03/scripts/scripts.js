window.onload = function () {
  document.getElementById("tablaDatos").addEventListener("click",crearNuevaFila.bind(document.getElementById("tablaDatos")),false);
};
//Ejemplo Punto 1.7 de los apuntes
function crearNuevaFila() {
  let numFilas = this.childElementCount;
  let fila =
    "<tr id='" +
    numFilas +
    "'><td>" +
    (numFilas + 1) +
    "</td><td>" +
    (numFilas + 2) +
    "</td></tr>";
  this.innerHTML += fila;
  document.getElementById(numFilas).addEventListener(
    "click",
    (event) => {
      alert("Id: " + event.currentTarget.id);
      event.stopPropagation();
    },
    false
  );
}
