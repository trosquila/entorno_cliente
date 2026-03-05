
export async function getClientes(){
    const consulta = await fetch('http://localhost:3000/clientes');
    const respuesta = await consulta.json();
    
    return respuesta;
}
export async function getVehiculos(){
    const consulta = await fetch('http://localhost:3000/vehiculos');
    const respuesta = await consulta.json();
    
    return respuesta;
}
export async function getReparaciones(){
    const consulta = await fetch('http://localhost:3000/reparaciones');
    const respuesta = await consulta.json();
    
    return respuesta;
}
