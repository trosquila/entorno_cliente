function ejer03(){
    let arrayCostura =[];
    arrayCostura.push("tela", "bies", "hilo", "tijeras", "máquina de coser", "botón");
    arrayCostura.splice(1,1);
    arrayCostura.splice(2,0,"hilo torzal");
    arrayCostura.splice(3,0,"cúter rotatorio", "mesa de corte");
    console.log(arrayCostura);
    arrayCostura.sort(function(element1, element2){
        if(element1.toLocaleLowerCase() > element2.toLocaleLowerCase()){
            return 1;
        }else if (element1.toLocaleLowerCase() < element2.toLocaleLowerCase()){
            return -1;
        }
        return 0;
    });
    console.log(arrayCostura);
}
ejer03();