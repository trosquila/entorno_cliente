function ejer07(){
    let notas =[3,4,7,3,8,9,8,7,6,4,3,6,7,10,1];
    let media = notas.reduce((valorAnt, valorAct) => valorAnt + valorAct);
    console.log(media);
}
ejer07();