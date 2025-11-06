function script(){
    let productos =["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón", "cremallera", "aguja", "alfileres"];
    productos.splice(1,1);
    productos.splice(5,1);
    productos.splice(2,0,"hilo torzal");
    productos.splice(productos.indexOf('tijeras'),1,"cúter rotatorio", "mesa de corte");
    console.log(productos);
    let productosCP1 = productos.slice(0,4);
    let productosCP2 = productos.slice(4, productos.length)
    console.log(productosCP1);
    console.log(productosCP2);
    productos.sort(function (elem1, elem2) {
    if (elem1.length > elem2.length) {
        return 1;
    }
    if (elem1.length < elem2.length) {
        return -1;
    }
        return 0;
    });
    console.log(productos);
    console.log(productos.join('*'));
    let cadenaNum = "12/8/15/6/10/5/9/14/7";
    cadenaNum = cadenaNum.split('/');
    console.log(cadenaNum);
    cadenaNum.sort((num1, num2) => num1 - num2);
    console.log(cadenaNum);
    let iva = cadenaNum.map(num => parseFloat(num) + num * 0.21);
    let ivaAlto = iva.filter(function (num) {
        if(num > 10){return num;}
    })
    console.log(iva);
    console.log(ivaAlto);
    
}
script();