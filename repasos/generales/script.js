function constantes(){
    console.log(Math.PI);
    console.log( Math.SQRT2);
}
function redondeo(){
    let numero1 = 4.56;
    let numero2 = 2.1;
    let numero3 = -6.8;
    console.log('Redondeo '+numero1+': '+Math.round(numero1)+', '+numero2+': '+Math.round(numero2)+', '+numero3+': '+Math.round(numero3));
    console.log('Redondeo hacia abajo '+numero1+': '+Math.floor(numero1)+', '+numero2+': '+Math.floor(numero2)+', '+numero3+': '+Math.floor(numero3));
    console.log('Redondeo hacia arriba '+numero1+': '+Math.ceil(numero1)+', '+numero2+': '+Math.ceil(numero2)+', '+numero3+': '+Math.ceil(numero3));
}
function maxMin(){
    let array = [4, 9, 2, 7, 5];
    let maximo = 0;
    let min = Math.min(...array);
    array.forEach(element => {
        maximo = Math.max(maximo, element);
    });
    console.log(array);
    console.log(maximo);
    console.log(min);
}
function raices(){
    const numInicial = 5;
    console.log(Math.pow(numInicial,3));
    console.log(Math.sqrt(144));
}
function valorAbsoluto(){
    console.log(Math.abs(-25));
    
}
function aleatorio(){
    let aleatorio = Math.floor(Math.random() * 10 + 1);
    console.log(aleatorio);
    
}
function crearFechas(){
    const nuevaFecha = new Date();
    const fechaEPOCH = new Date(1577836801000);
    const nuevaFechaFormatoDif = new Date('2020-07-30');
    const nuevaFechaFormatoDif2 = new Date('07-30-2020');
    const nuevaFechaFormatoDif3 = new Date('30-Aug-2020');
    const nuevaFechaFormatoNum = new Date(2020, 7, 41);
    
    console.log("nuevaFecha:", nuevaFecha.toString());
    console.log("fechaEPOCH:", fechaEPOCH.toString());
    console.log("nuevaFechaFormatoDif:", nuevaFechaFormatoDif.toString());
    console.log("nuevaFechaFormatoDif2:", nuevaFechaFormatoDif2.toString());
    console.log("nuevaFechaFormatoDif3:", nuevaFechaFormatoDif3.toString());
    console.log("nuevaFechaFormatoNum:", nuevaFechaFormatoNum.toString());

    console.log("nuevaFecha:", nuevaFecha);
    console.log("fechaEPOCH:", fechaEPOCH);
    console.log("nuevaFechaFormatoDif:", nuevaFechaFormatoDif);
    console.log("nuevaFechaFormatoDif2:", nuevaFechaFormatoDif2);
    console.log("nuevaFechaFormatoDif3:", nuevaFechaFormatoDif3);
    console.log("nuevaFechaFormatoNum:", nuevaFechaFormatoNum);
    
}
function edadEdadExacta(){
    let fechaInsertada = '2003-07-04';
    fechaInsertada = new Date(fechaInsertada);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaInsertada.getFullYear();
    console.log(edad);
    let mesesRestantes = fechaInsertada.getMonth() - fechaActual.getMonth();
    if(mesesRestantes < 0){
        mesesRestantes +=12;
    }
    let diasRestantes = fechaInsertada.getDate() - fechaActual.getDate();
    if(diasRestantes < 0){
        mesesRestantes--;
    }

    let diasTotales = Math.abs(Math.floor((fechaInsertada.getTime() - fechaActual.getTime()) / (1000 * 60 * 60 * 24)));
    console.log('Dias totales '+diasTotales);
    
    if (fechaActual > fechaInsertada) {
        fechaInsertada = new Date(fechaActual.getFullYear() + 1, 6, 4);
    }
    const diferenciaMs = fechaInsertada - fechaActual;
    console.log(mesesRestantes);
    console.log(diasRestantes);
    let diferenciaDias = Math.floor((diferenciaMs) / (1000 * 60 * 60 * 24));
    console.log("Días desde nacimiento:", diferenciaDias);

}
/*
🎲 Fecha aleatoria
Genera una fecha aleatoria entre el 1/1/2000 y el 1/1/2025.

📅 Redondeo de fechas
Dado un número de milisegundos desde Epoch, redondea:

A días completos (Math.floor(ms / (1000 * 60 * 60 * 24)))

A semanas (Math.floor(días / 7))
*/
edadEdadExacta();