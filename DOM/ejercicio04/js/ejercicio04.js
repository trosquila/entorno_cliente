function ejer04(){
    const seccionTercera = document.getElementById('seccionTercera');
    const primerElemento = seccionTercera.firstElementChild;
    primerElemento.addEventListener('click', function(){
        const newH2 = document.createElement('h2');
        newH2.textContent = "“Lorem Ipsum de nuevo";
        seccionTercera.insertBefore(primerElemento, newH2);
    });
}