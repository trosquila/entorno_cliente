const formulario = document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const DNI = document.getElementById('DNI').value;
    const fechaNac = document.getElementById('fechaNac').value;
    const sexo = document.getElementById('sexo').value;

    console.log(`Datos del formulario:
- Nombre: ${nombre}
- Apellidos: ${apellidos}
- DNI: ${DNI}
- Fecha de Nacimiento: ${fechaNac}
- Sexo: ${sexo}`);

})