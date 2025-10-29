document.addEventListener('DOMContentLoaded', () => {
    let arranque = setTimeout(saludo, 5000);
    let arranque2 = setTimeout(saludo, 7000);
});

function saludo(){
    alert('hola');
}
let estadoBtn = false;
let intervalo;
let btn = document.getElementById('btn').addEventListener('click', function(){
    let segundos = 0;
    if(estadoBtn == false){
        intervalo = setInterval(() => {
            segundos = segundos + 3;
            console.log('Han pasado '+segundos+' segundos');
        }, 3000);
        estadoBtn = true;
    }else{
        estadoBtn = false
        segundos = 0
        clearInterval(intervalo);
    }
})