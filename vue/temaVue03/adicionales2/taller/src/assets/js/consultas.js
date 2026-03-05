
export async function getClientes() {
    const consulta = await fetch('http://localhost:3000/clientes');
    const respuesta = await consulta.json();

    return respuesta;
}
export async function getVehiculos() {
    const consulta = await fetch('http://localhost:3000/vehiculos');
    const respuesta = await consulta.json();

    return respuesta;
}
export async function getReparaciones() {
    const consulta = await fetch('http://localhost:3000/reparaciones');
    const respuesta = await consulta.json();

    return respuesta;
}

export async function eliminarUsuario(idUsuario) {
    try {
        const response = await fetch(`http://localhost:3000/clientes/${idUsuario}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error durante la eliminación:', error);
    }
}

export async function eliminarVehiculos(idVehiculo) {
    try {
        const response = await fetch(`http://localhost:3000/vehiculos/${idVehiculo}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error durante la eliminación:', error);
    }
}


export async function eliminarReparaciones(idVehiculo) {
    try {
        const response = await fetch(`http://localhost:3000/reparaciones/${idVehiculo}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error durante la eliminación:', error);
    }
}