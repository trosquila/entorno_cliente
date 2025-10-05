function ejer02(){
    const palabra1 = prompt('palabra1');
    const palabra2 = prompt('palabra2');
    let array1 = palabra1.split('');
    let array2 = palabra2.split('');
    if(array1.length > array2.length){
        console.info('la palabra 1 es mayor');
    }else  if(array1.length < array2.length){
        console.info('la palabra 1 es menor');
    }else{
        console.info('la longitud es igual');
    }
}
ejer02();