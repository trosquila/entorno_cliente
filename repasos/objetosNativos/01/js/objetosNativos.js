
function objetosNativos01(){
    let numeroPantalla = 0;
    do{
        numeroPantalla = Number(prompt('Inserte un numero'));
    }while(numeroPantalla < 0 || numeroPantalla > 9);
    
    altaUsuario(numeroPantalla);
}
function altaUsuario(numeroPantalla){
    const datosPersonales = prompt('Inserte su nombre y apellido, también su teléfono separado de lo anterior por :');
    let separarDatosPersonales = datosPersonales.split(':');
    const nombre = separarDatosPersonales[0];
    const telefono = separarDatosPersonales[1];
    alert('Su nombre es '+ nombre.toUpperCase());
    let dividirTelefono = telefono.split('');
    let password = '';
    dividirTelefono.forEach(element => {
        if(element === '6'){
            password += numeroPantalla;
        }else{
            password += element;
        }
    });
    password = parseInt(password);
    let separarNombre = nombre.split(' ');
    let nombreUsuario = separarNombre[0].substring(0,2)+''+separarNombre[1].slice(-3);
    const mensaje = `Bienvenido.
        Tu nombre de usuario es ${nombreUsuario}
        Tu contraseña temporal es ${password}`;
}
function objetosNativos02(){
    const fechaNac = prompt('inserte su fecha de nacimiento en formato DD/MM/AAAA');
    const fechaInsertada = new Date(fechaNac);
    const fechaActual = new Date();
    const yearsPasados = fechaActual.getFullYear() - fechaInsertada.getFullYear()
    console.log(yearsPasados);
}
function objetosNativos04(){
    let dia = 6;
    let mes = 1;
    let year = 2002;
    let fecha = year+'/'+mes+'/'+dia;
    fecha = new Date(fecha);
    console.log(fecha)
    if(fecha.getDay() == '0' || fecha.getDay() == '6'){
        alert('es fin de semana');
    }else{
        alert('no es fin de semana');
    }
    let fechaActual = new Date();
    let fechaEpoch = fecha.getTime();
    let actualEpoch = fechaActual.getTime();
    let resultado = actualEpoch = fechaEpoch;
    
}
objetosNativos04();