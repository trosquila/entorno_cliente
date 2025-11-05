function parte01(){
    let cadena = prompt('cadena números separada por comas');
    let arrayNum = cadena.split(',');
    console.log(arrayNum);
    let media = 0;
    arrayNum.forEach(element => {
        media += parseInt(element);
    });
    media = media / arrayNum.length;
    console.info(media.toFixed(1));
}

function parte02(){
    let numero = Number(prompt('número'));
    let cubo = 1;
    if(numero % 2 == 0){
        for(i = 0; i <3; i++){
        cubo *= numero
        }
    console.log(cubo);
    }else{
        console.log('no es un entero');
    }
}   

function parte03(){
    let dni = prompt('DNI');
    let cadenaTexto = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let letra = dni.charAt(dni.length);
    let numeroLetra = (dni.substring(0, dni.length - 1)) /23;
    if(letra == cadenaTexto.charAt(numeroLetra)){
        console.log('de locos');
    }
}

function parte04(){
    let cadena = prompt('cadena');
    cadena = cadena.toLocaleLowerCase();
    let nuevaCadenaPares = '';
    for(i = 0; i < cadena.length; i++){
        if(i % 2 == 0){
            nuevaCadenaPares = nuevaCadenaPares + cadena.charAt(i);
            console.log(nuevaCadenaPares);
            console.log(i); 
        }
    }

    console.log(nuevaCadenaPares);
    if(cadena.indexOf('aviko') == -1){
        console.log('No se encontro “aviko”');
    }else{
        console.log('Se encontro “aviko”');
    }
}
parte04();