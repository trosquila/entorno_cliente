function ejer02(){
    const div = document.getElementById('seccionPrimera');
    const primerP = div.firstElementChild;
    console.log(primerP);

    const tercerP = div.getElementsByTagName('p')[2];
    console.log(tercerP);
    const ul = document.getElementsByTagName('ul')[0];
    console.log(ul.lastElementChild);
    const label = document.getElementsByTagName('label')[0];
    console.log(label);
    
}
ejer02();