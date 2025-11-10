/**
 * ejercicio 9.2
 * let ventana = window.open("","pop-up","width=500,height=300,screenX=10,screenY=20");
 * ventana.document.write("<h1>Esto es una ventana emergente</h1>");
 * ventana.moveTo(300,100);
 * ventana.close();
 */

/**
 * ejercicio 9.3
 */

var idTimer = null;
var ventana = null;

function mostrarMensaje() {
  let contador = 3;
  console.log(idTimer);
  if (idTimer == null) {
    idTimer = setInterval(() => {
      console.log("Han pasado " + contador + " segundos");
      contador = contador + 3;
    }, 3000);
  } else {
    clearInterval(idTimer);
    idTimer = null;
  }
}

function abrirVentana() {
  ventana = window.open(
    "",
    "pop-up",
    "width=30,height=10, toolbar=false, menubar=false, titlebar=false, scrollbar=false, location=false"
  );
  ventana.document.write("<button onclick='opener.cerrar();'>Cerrar</button>");
}

function cerrar() {
  ventana.close();
}
