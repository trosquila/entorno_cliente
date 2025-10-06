function parte01(){
    let min = 0;
    let max = 100;
    let arrayNum =[];
    for (i = 0; i <3; i++){
        let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayNum.push(numRandom);
    }
    let mayor = 0;
    arrayNum.forEach(element => {
        if(element > mayor){
            mayor = element;
        }
    });
    console.log(arrayNum);
    console.log(mayor);
    let mayorMat = Math.max(arrayNum[0], arrayNum[1], arrayNum[2]);
    console.log('con math '+ mayorMat);
}
function parte02(){
    let cadena = prompt('cadena números separada por comas');
    let arrayNum = cadena.split(',');
    console.log(arrayNum);
    let media = 0;
    arrayNum.forEach(element => {
        media += parseInt(element);
    });
    media = media / arrayNum.length;
    console.info(media.toFixed(1));
    const redondeoPregunta = confirm('Redondear hacia arriba?');
    let arrayRedondeo = [];
    let memoriaNumeros = 0;
    if(redondeoPregunta == true){
        arrayNum.forEach(element => {
            arrayRedondeo.push()
        });
    }

}
