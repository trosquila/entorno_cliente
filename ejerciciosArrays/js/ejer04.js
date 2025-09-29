function ejer04(){
    let datosUser = prompt("Inserte una cadena de caracteres separados por '/'");
    let arrayDatos =[];
    arrayDatos = datosUser.split("/");
    arrayDatos.sort(function(element1, element2){
        if(element1.toLocaleLowerCase() < element2.toLocaleLowerCase()){
            return 1;
        }else if (element1.toLocaleLowerCase() > element2.toLocaleLowerCase()){
            return -1;
        }
        return 0;
    });
    for(array  arrayDatos){

    }
}
ejer04();