function recuperarDatos() {
  let idUser = document.getElementById("idUser").value;
  if (isNaN(idUser) || idUser == "") {
    alert("Debes introducir un número");
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts?" + "userId=" + idUser)
      .then((response) => response.json()) //En la ejecucuión del primer then, recuperamos los datos incluidos en la respuesta
      .then((infoPosts) => mostrarDatos(infoPosts))
      .catch((error) => console.error(error));
  }
}

function mostrarDatos(infoPosts) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  infoPosts.forEach((post) => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>`;
    tbody.appendChild(newPost);
  });
}
function sacarObjeto(){
  fetch("https://jsonplaceholder.typicode.com/users/1") //devuelve una promesa
    .then(response => response.json()) //El método json() devuelve otra promesa
    .then(datosUsuario => tabla(datosUsuario)) //then() de la segunda promesa
    .catch(error => console.error(error)); 
}
function tabla(datos){
      // Crear la tabla
    let tabla = document.createElement("table");
    tabla.border = "1";
    datos.forEach ((post)=>{
      let fila = document.createElement("tr");
      let celda1 = document.createElement("td");
      celda1.textContent = "Columna 1";
      let celda2 = document.createElement("td");
      celda2.textContent = "Columna 2";

      celda1.innerHTML = post.name;
      celda2.innerHTML = post.email;
      fila.appendChild(celda1);
      fila.appendChild(celda2);

      // Añadir fila a la tabla
      tabla.appendChild(fila);
    });
    
    // Insertar la tabla en el contenedor
    document.getElementById("contenedorTabla").appendChild(tabla);

}