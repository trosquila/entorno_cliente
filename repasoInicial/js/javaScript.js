function ejer01() {
    let numeroInicial = Number(prompt('Inserte un número'));
    if (isNaN(numeroInicial)) {
        console.log('No es un número');
    } else if (numeroInicial > 0) {
        console.log('Es positivo');
    } else if (numeroInicial < 0) {
        console.log('Es negativo');
    }
}

$(document).ready(function() {
    let euros = document.getElementById('euro');
    let dolares = document.getElementById('dolar');
    euros.addEventListener("change", function() {
        let valorEuro = euros.value;
        let valorDolar = valorEuro * 1.18;
        dolares.value = valorDolar;
    });
    dolares.addEventListener("change", function() {
        let valorDolar = dolares.value;
        let valorEuro = valorDolar * 0.84;
        euros.value = valorEuro;
    });
});

function ejer03() {
    let numeroInicial = Number(prompt('Inserte el número maximo'));
    if (!isNaN(numeroInicial)) {
        if (numeroInicial < 100 && numeroInicial > 0) {
            for (i = 2; i <= numeroInicial; i++) {
                let esPrimo = true;
                for (j = 2; j < i; j++) {
                    if (i % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    console.log(i + " es primo");
                }
            }
        }
    } else {
        console.warn('ERROR');
    }
}


function dividir() {
    let inputNum1 = document.getElementById('numero1');
    let inputNum2 = document.getElementById('numero2');
    let result = document.getElementById('result');
    let valor1 = inputNum1.value;
    let valor2 = inputNum2.value;
    if ((!isNaN(valor1) && valor1 > 0 && valor1 != null) && (!isNaN(valor2) && valor2 > 0 && valor2 != null)) {
        result.value = valor1 / valor2;
    } else {
        if (isNaN(valor1) || valor1 < 1) {
            inputNum1.value = "";
        }
        if (isNaN(valor2) || valor2 < 1) {
            inputNum2.value = "";
        }
        console.warn('Error');
    }
}

function multiplicar() {
    let inputNum1 = document.getElementById('numero1');
    let inputNum2 = document.getElementById('numero2');
    let result = document.getElementById('result');
    let valor1 = inputNum1.value;
    let valor2 = inputNum2.value;
    if ((!isNaN(valor1) && valor1 > 0 && valor1 != null) && (!isNaN(valor2) && valor2 > 0 && valor2 != null)) {
        result.value = valor1 * valor2;
    } else {
        if (isNaN(valor1) || valor1 < 1) {
            inputNum1.value = "";
        }
        if (isNaN(valor2) || valor2 < 1) {
            inputNum2.value = "";
        }
        console.warn('Error');
    }
}