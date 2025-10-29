function ejer03(){
    const ul = document.getElementsByTagName('ul')[0];
    console.log(ul.innerHTML);
    console.log(ul.textContent);
    
    const radioSeleccionado = document.querySelector('input[name="sexo"]:checked');
    if (radioSeleccionado) {
        console.log(radioSeleccionado.value);
        } else {
        console.log("Ninguna opción seleccionada");
        }
    }
ejer03();