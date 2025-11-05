function ejer08(){
    let fechaNacimiento1 = new Date('2003-07-04');
    let fechaNacimiento2 = new Date('2003-07-04');

    //El día de la semana de una de ellas. 
    console.log(fechaNacimiento1.getDay())
    //Modifica una de ellas para que contenga la fecha del cumpleaños de este año (cambia sólo el año).
    fechaNacimiento2.setFullYear('2025');
    console.log(fechaNacimiento2)
    //El día de la semana de la fecha en este año. 
    
}
ejer08();