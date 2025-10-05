function ejer03(){
    const numeros = prompt('numeros separados por &');
    let array = numeros.split('&');
    let arrayNumeros = [];
    array.forEach(element => {
        arrayNumeros.push(parseInt(element));
    });
    if((arrayNumeros[0] == arrayNumeros[1]) && (arrayNumeros[1] == arrayNumeros[2])){
        console.log('todos iguales');
    }else if((arrayNumeros[0] == arrayNumeros[1]) || (arrayNumeros[0] == arrayNumeros[2]) || (arrayNumeros[1] == arrayNumeros[2])){
        console.log('un par iguales');
    }else{
        let mayor = 0;
        arrayNumeros.forEach(element => {
            if(mayor < element){
                mayor = element;
                console.log(mayor)
            }
        }); 
        console.log('todos diferentes, mayor: '+ mayor );
    }
    console.log(arrayNumeros);
}
ejer03();