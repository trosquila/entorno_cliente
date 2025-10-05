function ejer01(){
    let array = [];
    let consulta = 0;
    do {
        consulta = Number(prompt('Inserte un número'));
        array.push(consulta);
        array.sort(function (elem1, elem2) {
        if (elem1 > elem2) {
            return 1;
        }
        if (elem1 < elem2) {
            return -1;
        }
            return 0;
        });

        
    } while (consulta != '');
    console.log(array);
}
ejer01();