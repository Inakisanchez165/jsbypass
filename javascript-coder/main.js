// Variables iniciales
let edad = 0;
let dinero = 0;

// Constantes
const costoEntrada = 30000;
const edadMinima = 18;
const costoBebidaAlcoholica = 8000;
const costoBebidaSinAlcohol = 4000;

const mensajes = [
    '¡Sos muy joven para entrar!',
    '¡Buenas Noches y Bienvenido a Bypass!',
    '¡No tienes suficiente dinero para la entrada!',
    '¡No tienes suficiente dinero para una bebida!'
];
const bebidas = ['Sex on The Beach', 'Fernet con Coca', 'Vodka con Speed'];
const bebidasSinAlcohol = ['Gaseosa', 'Agua'];

// Funciones
function solicitarEdad() {
    return parseInt(document.getElementById('edad').value);
}

function solicitarDinero() {
    return parseInt(document.getElementById('dinero').value);
}

function verificarEntrada(edad, dinero) {
    if (edad >= edadMinima && dinero >= costoEntrada) {
        return true;
    } else if (edad < edadMinima) {
        mostrarMensaje(mensajes[0]);
        return false;
    } else {
        mostrarMensaje(mensajes[2]);
        return false;
    }
}

function mostrarMensaje(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
}

function mostrarResultado(resultado) {
    if (resultado) {
        mostrarMensaje(mensajes[1]);
        dinero -= costoEntrada;
        mostrarMensaje(`Has pagado la entrada. Te quedan ${dinero} Pesos.`);
        animarPuerta();
    }
}

function animarPuerta() {
    const animacionPuerta = document.getElementById('animacion-puerta');
    animacionPuerta.classList.add('puerta-abierta');
    setTimeout(() => {
        document.getElementById('puerta-cerrada').style.display = 'none';
        document.getElementById('puerta-abierta').style.display = 'block';
        animarEntrada();
    }, 1000); // Ajusta el tiempo según la duración de la animación (en milisegundos)
}

function animarEntrada() {
    const entradaDiv = document.getElementById('entrada');
    entradaDiv.style.opacity = 0;
    setTimeout(() => {
        entradaDiv.style.display = 'none';
        document.getElementById('pregunta').style.display = 'block';
    }, 1000); // Ajusta el tiempo según la duración de la animación (en milisegundos)
}

document.getElementById('beber').addEventListener('click', function() {
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('puerta-abierta').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('puerta-abierta').style.display = 'none';
        document.getElementById('barra-tragos').style.display = 'block';
        document.getElementById('bebidas').style.display = 'block';
        mostrarMensaje('¿Qué deseas beber?');
    }, 1000); // Ajusta el tiempo según la duración de la animación (en milisegundos)
});

document.getElementById('bailar').addEventListener('click', function() {
    mostrarMensaje('¡Hora de bailar! 🎉');
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('barra-tragos').style.display = 'none';
    document.getElementById('puerta-abierta').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('puerta-abierta').style.display = 'none';
        document.getElementById('disco-bailar').style.display = 'block';
    }, 1000); // Ajusta el tiempo según la duración de la animación (en milisegundos)
});

function comprarBebida() {
    const bebida = document.getElementById('bebida').value;
    let costo = (bebida === '4' || bebida === '5') ? costoBebidaSinAlcohol : costoBebidaAlcoholica;
    if (dinero >= costo) {
        dinero -= costo;
        let bebidaSeleccionada = (bebida === '4' || bebida === '5') ? bebidasSinAlcohol[bebida - 4] : bebidas[bebida - 1];
        mostrarMensaje(`¡Disfruta tu ${bebidaSeleccionada}! Te quedan ${dinero} Pesos.`);
        setTimeout(() => {
            document.getElementById('bebidas').style.display = 'none';
            document.getElementById('barra-tragos').style.display = 'none';
            document.getElementById('puerta-abierta').style.opacity = 0;
            setTimeout(() => {
                document.getElementById('puerta-abierta').style.display = 'none';
                document.getElementById('disco-bailar').style.display = 'block';
                mostrarMensaje('¡Hora de bailar! 🎉');
            }, 1000);
        }, 2000); // Ajusta el tiempo según la duración de la animación (en milisegundos)
    } else {
        mostrarMensaje(mensajes[3]);
    }
}

// Eventos
document.getElementById('verificar').addEventListener('click', function() {
    edad = solicitarEdad();
    dinero = solicitarDinero();
    const resultado = verificarEntrada(edad, dinero);
    mostrarResultado(resultado);
});

document.getElementById('guardarDatos').addEventListener('click', function() {
    edad = solicitarEdad();
    dinero = solicitarDinero();
    localStorage.setItem('edad', edad);
    localStorage.setItem('dinero', dinero);
    alert('Datos guardados en LocalStorage');
});

document.getElementById('comprarBebida').addEventListener('click', comprarBebida);

// Cargar datos guardados al inicio
window.onload = function() {
    const edadGuardada = localStorage.getItem('edad');
    const dineroGuardado = localStorage.getItem('dinero');
    if (edadGuardada) {
        document.getElementById('edad').value = edadGuardada;
    }
    if (dineroGuardado) {
        document.getElementById('dinero').value = dineroGuardado;
    }
};
