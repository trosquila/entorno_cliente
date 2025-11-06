let inicioJuego = false;
let listaJugadores = [];
let turnos = 0;
let confirmarPintar = false;
document.addEventListener('DOMContentLoaded', function(){
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
        let jugador1 ={
            'nombre': jugadores[0].value,
            'casillas': []
        }
        let jugador2 ={
            'nombre': jugadores[1].value,
            'casillas': []
        }

        listaJugadores.push(jugador1, jugador2);
        inicioJuego = true;
        btnIniciar.disabled = true;
    }else{
        console.log('no se juega');
        
    }
});

const tablero = document.querySelectorAll('.celda');
tablero.forEach(celda => {
    celda.addEventListener('click', function(){
        let estilos = this.classList;
        estilos = Array.from(estilos);
        if(estilos.includes('celdaNaranja') || estilos.includes('celdaMorada')){
            alert('celda ya seleccionada');
        }else{
            if(turnos % 2 === 0){
                this.classList.add('celdaNaranja');
                listaJugadores[0].casillas.push(this.id);
            }else{
                this.classList.add('celdaMorada');
                listaJugadores[1].casillas.push(this.id);
            }
        turnos++;
        }
        console.log(listaJugadores);
        
    });
});