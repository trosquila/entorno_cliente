var idTimer = null;

function mostrarmensajes() {
    setTimeout(() =>{
        mostrarMensajeAlert("Bienvenido a este sitio web");
    },5000);
    setTimeout(() =>{
        mostrarMensajeAlert("Bienvenido de nuevo");
    },7000);
}

function mostrarMensajeAlert(mensaje){
    alert(mensaje);
}
function mostrarMensaje() {
    let contador = 3;

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