function ejer04(){
    const numero = parseInt(prompt('numero'));
    let impar = [];
    let par = [];
    for (i = 1; i <= numero; i++){
        if(i%2 == 0){
            par.push(i);
        }else{
            impar.push(i);
        }
    }
    console.log('pares '+par.join());
    console.log('impares '+impar.join());
}
ejer04();