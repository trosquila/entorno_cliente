function ejer02(){
    let arrayCostura =[];
    arrayCostura.push("tela", "bies", "hilo", "tijeras", "máquina de coser", "botón");
    arrayCostura.splice(1,1);
    console.log(arrayCostura);
    arrayCostura.splice(2,0,"hilo torzal");
    console.log(arrayCostura);
    arrayCostura.splice(3,0,"cúter rotatorio", "mesa de corte");
    console.log(arrayCostura);
    let arrayCostura2 = arrayCostura.slice(0,4);
    let arrayCostura3 = arrayCostura.slice(4, 7);
    console.log(arrayCostura2);
    console.log(arrayCostura3);
    arrayCostura2.splice(0,0,"remalladora");
    arrayCostura2.splice(-1,0, "cinta métrica");
    arrayCostura2.splice(-1,0, "cinta métrica");
    console.log(arrayCostura);
    console.log(arrayCostura2);
    console.log(arrayCostura3);
}
ejer02();