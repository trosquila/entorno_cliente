const url = 'https://api.nasa.gov';
const userKey = 'Nlbbi9ub85Kyn6tbTP3QYJwcJbCk4xIcw6GaV9mF';

export async function getImagenDelDia() {
    const consulta = await fetch(`${url}/planetary/apod?api_key=${userKey}`);
    const respuesta = await consulta.json();
    console.log(`${url}/planetary/apod?api_key=${userKey}`);
    
    return respuesta;
}   