document.addEventListener('DOMContentLoaded', function(){
    let inicioJuego = false;
    bloquearTablero();
});
function bloquearTablero(){
    let celdas = document.getElementsByClassName('celda');
    celdas = Array.from(celdas);
    celdas.forEach(element => {
        element.classList.toggle('desactivarCelda'); 
    });
}
const btnIniciar = document.querySelectorAll('input[type="button"]')[0];
btnIniciar.addEventListener('click',function(){
    let jugadores = document.querySelectorAll('input[type="text"]');
    if(jugadores[0].value != "" || jugadores[1].value != ""){
        bloquearTablero()
        inicioJuego = true;
    }else{
        console.log('no se juega');
        
    }
})
