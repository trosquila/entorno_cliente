document.getElementById('formulario').addEventListener('submit', function(){
    event.preventDefault();
    const opcion = document.querySelector('input[name="animales"]:checked').value;
    
    if(opcion === '0'){
        let URL = "http://localhost:3000/animales";
        let nuevoAnimal = {
        Tipo: "Prueba",
        Nombre: "Prueba",
        Observacion: "probando a guardar",
        Ubicacion: "si",
        Rasgos: "a ver si furrula",
        Imagen: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
        };
        let init = {
        method: 'POST',
        body: JSON.stringify(nuevoAnimal),
        headers: { 'Content-Type': 'application/json'}
        };
        fetch(URL, init)
        .then(response => response.json())
        .then(datosRespuesta => alert(datosRespuesta.id))
        .catch(err => console.error(err));
    }else if(opcion === '1'){
        fetch("http://localhost:3000/animales")
            .then(response => {
            if (response.ok) { return response.json();
            } else {
            return "Error HTTP:"+response.status+"("+ response.statusText + ")";
            }
        })
            .then(animales => imprimir(animales))   
            .catch(error => console.error(error)); 
    }
});

function imprimir(animales) {
    const contenedor = document.createElement('div');
    contenedor.id = 'contenedor';
    document.body.appendChild(contenedor);
    animales.forEach(element => {
        const parrafo = document.createElement('p');
        parrafo.innerHTML = 'Tipo: '+element.Tipo+' -- Nombre: '+element.Nombre+' -- Observaciones: '+element.Observacion;
        contenedor.appendChild(parrafo);
    });
}
