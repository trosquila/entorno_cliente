function ejer06(){
    const arrayNotas = [5,3,5,9,4,6,3,2,7,8,6,5,6,5,4];
    let metida = arrayNotas.reduce((valorAnt, valorAct) =>valorAnt + valorAct)/15;
    console.log(metida);
    let masAlta = 0;
    arrayNotas.forEach((nota) => {
        if(nota > masAlta){
            masAlta = nota;
        }
    }); 
    console.log(masAlta);
    const precios = [12.99, 8.50, 15.75, 22.30, 5.99, 19.90, 3.45, 10.00, 7.25, 13.60, 9.99, 6.80];
    let totalPrecio = precios.reduce((valorAnt, valorAct) =>valorAnt + valorAct);
    console.log(totalPrecio);
    let copiaPrecios = precios.slice(0);
    
    console.log(copiaPrecios);

}
ejer06();
