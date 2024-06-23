const palabras = [
    'BERLIN', 'MURO', 'GUERRA', 'FRIA', 'ALEMANIA',
    'ORIENTAL', 'OCCIDENTAL', 'CAIDA', '1989', 'LIBERTAD'
];

const filas = 10;
const columnas = 10;
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let sopa = Array(filas).fill(null).map(() => Array(columnas).fill(''));

// Llenar la sopa de letras con palabras
function colocarPalabra(palabra) {
    let dir = Math.random() < 0.5; // true for horizontal, false for vertical
    let len = palabra.length;
    let row, col;

    if (dir) { // horizontal
        row = Math.floor(Math.random() * filas);
        col = Math.floor(Math.random() * (columnas - len + 1));
        for (let i = 0; i < len; i++) {
            sopa[row][col + i] = palabra[i];
        }
    } else { // vertical
        row = Math.floor(Math.random() * (filas - len + 1));
        col = Math.floor(Math.random() * columnas);
        for (let i = 0; i < len; i++) {
            sopa[row + i][col] = palabra[i];
        }
    }
}

function llenarSopa() {
    palabras.forEach(palabra => {
        colocarPalabra(palabra);
    });

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (!sopa[i][j]) {
                sopa[i][j] = letras[Math.floor(Math.random() * letras.length)];
            }
        }
    }
}

function crearTabla() {
    let tabla = document.getElementById('sopa');
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement('td');
            celda.textContent = sopa[i][j];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}

// Inicializar el juego
llenarSopa();
crearTabla();