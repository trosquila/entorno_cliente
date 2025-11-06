let listaJugadores = [];
let turnos = 0;
let confirmarPintar = false;
let memoria =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let soluciones = [
    ['0-0', '0-1', '0-2'],
    ['1-0', '1-1', '1-2'],
    ['2-0', '2-1', '2-2'],
    ['0-0', '1-0', '2-0'],
    ['0-1', '1-1', '2-1'],
    ['0-2', '1-2', '2-2'],
    ['0-0', '1-1', '2-2'],
    ['0-2', '1-1', '2-0']
];
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
    if(jugadores[0].value != '' || jugadores[1].value != ''){
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
        btnIniciar.disabled = true;
    }else{
        console.log('no se juega');
        
    }
});

const tablero = document.querySelectorAll('.celda');
tablero.forEach(celda => {
    celda.addEventListener('click', function(){
        let estilos = this.id;
        let separarId = estilos.split('-');
        if (separarId[0] === 'A') {
            separarId[0] = 0;
        } else if (separarId[0] === 'B') {
            separarId[0] = 1;
        } else if (separarId[0] === 'C') {
            separarId[0] = 2;
        }
        if(memoria[separarId[0]][separarId[1]] != 0){
            alert('celda ya seleccionada');
        }else{
            if(turnos % 2 === 0){
                this.classList.add('celdaNaranja');
                listaJugadores[0].casillas.push(this.id);
                memoria[separarId[0]][separarId[1]] = 1;
            }else{
                this.classList.add('celdaMorada');
                listaJugadores[1].casillas.push(this.id);
                memoria[separarId[0]][separarId[1]] = 2;
            }
            let ganador = 0;
            soluciones.forEach(element => {
                    let celda1 = element[0].split('-');
                    let celda2 = element[1].split('-');
                    let celda3 = element[2].split('-');
                    
                    if((memoria[celda1[0]][celda1[1]] != 0 && memoria[celda2[0]][celda2[1]!= 0] != 0 && memoria[celda3[0]][celda3[1]]  != 0) && ((memoria[celda1[0]][celda1[1]] == memoria[celda2[0]][celda2[1]]) && (memoria[celda1[0]][celda1[1]] == memoria[celda3[0]][celda3[1]]))){
                        console.log('hay un ganador');
                        bloquearTablero()                       
                    }
            });
        turnos++;
        }
    });
});
const reiniciar = document.querySelectorAll('input[type="button"]')[1];
reiniciar.addEventListener('click',function(){
    listaJugadores = [];
    turnos = 0;
    confirmarPintar = false;
    memoria =[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    let celdas = document.getElementsByClassName('celda');
    celdas = Array.from(celdas);
    let jugadores = document.querySelectorAll('input[type="text"]');
    jugadores.forEach(element =>{element.value = '';});
    celdas.forEach(element => {
        try {
            element.classList.remove('celdaNaranja');
            element.classList.remove('celdaMorada');
            btnIniciar.disabled = false;
        } catch (error) {
            
        }
    });
});