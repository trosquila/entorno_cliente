document.addEventListener("DOMContentLoaded", function name(params) {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Texto de ejemplo';
    const formulario = document.getElementById('miFormulario');
    formulario.appendChild(nuevoParrafo);

    nuevoParrafo.addEventListener('click',function cambiarTxt(){
        this.textContent = 'Has hecho click';
        this.removeEventListener('click', cambiarTxt());
    });

    nuevoParrafo.addEventListener('dblclick',function cambiarColor(){
        this.classList.toggle('txtVerde');
        this.removeEventListener('click', cambiarColor());
    });
    elementosDinamicos();
    formulario.addEventListener('submit', function regulares() {
        regulares.preventDefault();

        let inputNombre   = document.getElementById("nombre");
        let inputTelefono = document.getElementById("telefono");
        let inputEmail    = document.getElementById("email");
        let selectVehiculo = document.getElementById("vehiculo");
        let checkExt1     = document.getElementById("ext1");
        let checkExt2     = document.getElementById("ext2");
        let inputFecha    = document.getElementById("fecha")
        if(!inputNombre.validity.valueMissing ){
            console.log("required")
        }
        
    })
})

function elementosDinamicos(){
    let num = 0;
    const btnAdd = document.getElementById('addFila');
    let tabla = document.getElementById('tabla');
    btnAdd.addEventListener('click', function () {
        let tr = document.createElement('tr');
        let tdIzq = document.createElement('td');
        tdIzq.id = num;
        tdIzq.textContent = num;
        tdIzq.addEventListener('click', function () {
            alert(this.id);
        })

        num++;

        let tdDer = document.createElement('td');
        tdDer.textContent = num;
        tdDer.id = num;
        tdDer.addEventListener('click', function () {
            alert(this.id);
        })

        tr.appendChild(tdIzq);
        tr.appendChild(tdDer);
        tabla.appendChild(tr);
    })
}
