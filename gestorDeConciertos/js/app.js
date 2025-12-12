document.addEventListener('DOMContentLoaded', function inicioPrograma(){
    const gestorArtistas = document.getElementById('GestionArtistas');
    gestorArtistas = document.addEventListener('click', gestorArtistas);
    
    const gestorConciertos = document.getElementById('GestionConciertos')
    gestorConciertos = document.addEventListener('click', gestorConciertos);
    
    const verInfo = document.getElementById('VerInfo');
    verInfo = document.addEventListener('click', gestorVerInfo);
});

async function obtenerArtistas() {
        try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

async function obtenerGenerosMusicales() {
        try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

async function obtenerConciertos() {
        try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return []; 
    }
}

async function gestorVerInfo() {
    const contenedorSelect = document.createElement('div');

    const select = document.createElement('select');
    select.name = 'listaArtistas';
    select.id = 'listaArtistas';

    const labelSelect = document.createElement('label');
    labelSelect.textContent = 'Artistas: ';
}