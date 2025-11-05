function ejer03(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            if (response.ok) { 
                return response.json();
            } else {
                return "Error HTTP:"+response.status+"("+ response.statusText + ")";
            }
    })
        .then(datosUsuario => manejoDatos(datosUsuario))
        .catch(error => console.error(error)); 
}
function manejoDatos(array){
    let tarea55 = null; 
    array.forEach(element => {
        if(element.id == 55){
            tarea55 = element;
        }
    });
    console.log(tarea55);
}
function tareaNoExiste(){
    fetch("https://jsonplaceholder.typicode.com/201")
        .then(response => {
            if (response.ok) { 
                return response.json();
            } else {
                return "Error HTTP:"+response.status+"("+ response.statusText + ")";
            }
    })
        .then(datosUsuario => manejoDatos(datosUsuario))
        .catch(error => console.error(error)); 
}
function crearNuevo(){
    let nuevoItem = {
        userId: 23,
        title: "texto de ejemplo",
        completed: false,
    };
    let init = {
    method: 'POST',
    body: JSON.stringify(nuevoItem),
    headers: { 'Content-Type': 'application/json'} 
    };
    fetch("https://jsonplaceholder.typicode.com/201", init)
        .then(response => {
            if (response.ok) { 
                return response.status;
            } else {
                return "Error HTTP:"+response.status+"("+ response.statusText + ")";
            }
    })
        .then(response => console.log(response))
        .catch(error => console.error(error));      
}
tareaNoExiste();