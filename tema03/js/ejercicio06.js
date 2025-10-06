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
    if(numero % 1 == 0){
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

}