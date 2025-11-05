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
    if(redondeoPregunta == true){
        arrayRedondeo = arrayNum.map(element => Math.round(element));
        arrayRedondeo.sort(function (elem1, elem2) {
            if (elem1 > elem2) {
                return 1;
            }if (elem1 < elem2) {
                return -1;
            }
            return 0;
        });
        let menor = Math.min(...arrayRedondeo);
        console.log(menor);
    }else{
        arrayRedondeo = arrayNum.map(element => Math.floor(element));
        arrayRedondeo.sort(function (elem1, elem2) {
            if (elem1 > elem2) {
                return 1;
            }if (elem1 < elem2) {
                return -1;
            }
            return 0;
        });
        let mayor = Math.max(...arrayRedondeo);
        console.log(mayor);
    }
    let redondeoFinal = ((arrayRedondeo.reduce((anterior, posterior) => anterior + posterior, 0))/ arrayRedondeo.length).toFixed(2);
    console.log(redondeoFinal);
}
parte02();