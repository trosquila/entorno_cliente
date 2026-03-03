const url = 'https://api.nasa.gov';
const userKey = 'Nlbbi9ub85Kyn6tbTP3QYJwcJbCk4xIcw6GaV9mF';

export async function getImagenDelDia() {
    const consulta = await fetch(`${url}/planetary/apod?api_key=${userKey}`);
    const respuesta = await consulta.json();
    console.log(`${url}/planetary/apod?api_key=${userKey}`);
    
    return respuesta;
}   

export async function getImagenDelDiaFiltro(fecha) {
    const consulta = await fetch(`${url}/planetary/apod?date=${fecha}&api_key=${userKey}`);
    const respuesta = await consulta.json();
    console.log(respuesta);
    
    if (!consulta.ok) {
        console.log('Error');
        
        return null;
    }
    console.log(`con filtro ${url}/planetary/apod?date=${fecha}&api_key=${userKey}`);
    
    return respuesta;
}

export async function getAsteroidesCercanos() {
    const consulta = await fetch(`${url}/neo/rest/v1/neo/browse?api_key=${userKey}`);
    const respuesta = await consulta.json();
    console.log(respuesta);
    console.log(`${url}/neo/rest/v1/neo/browse?api_key=${userKey}`);
    
    return respuesta.near_earth_objects;
}

export async function getAsteroidesPorId(idAsteroide) {
    const consulta = await fetch(`${url}/neo/rest/v1/neo/${idAsteroide}?api_key=${userKey}`);
    const respuesta = await consulta.json();

    if (!consulta.ok) {
        console.log('Error');
        
        return null;
    }

    console.log(respuesta);
    console.log(`${url}/neo/rest/v1/neo/${idAsteroide}?api_key=${userKey}`);
    
    return respuesta;
}