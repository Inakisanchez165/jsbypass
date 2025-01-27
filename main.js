
let edad = 0;
let dinero = 0;


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


function solicitarEdad() {
    edad = parseInt(prompt('Por favor, ingresa tu edad:'));
    return edad;
}


function solicitarDinero() {
    dinero = parseInt(prompt('Por favor, ingresa la cantidad de dinero que tienes:'));
    return dinero;
}


function verificarEntrada(edad, dinero) {
    if (edad >= edadMinima && dinero >= costoEntrada) {
        return true;
    } else if (edad < edadMinima) {
        alert(mensajes[0]);
        return false;
    } else {
        alert(mensajes[2]);
        return false;
    }
}


function mostrarResultado(resultado) {
    if (resultado) {
        alert(mensajes[1]);
        dinero -= costoEntrada; 
        alert(`Has pagado la entrada. Te quedan ${dinero} Pesos.`);
        const bebida = prompt(`¿Te gustaría comprar una bebida? Elige una de las siguientes opciones:\n1. ${bebidas[0]} (${costoBebidaAlcoholica} pesos)\n2. ${bebidas[1]} (${costoBebidaAlcoholica} pesos)\n3. ${bebidas[2]} (${costoBebidaAlcoholica} pesos)\n4. ${bebidasSinAlcohol[0]} (${costoBebidaSinAlcohol} pesos)\n5. ${bebidasSinAlcohol[1]} (${costoBebidaSinAlcohol} pesos)`);
        if (bebida === '1' || bebida === '2' || bebida === '3' || bebida === '4' || bebida === '5') {
            let costo = (bebida === '4' || bebida === '5') ? costoBebidaSinAlcohol : costoBebidaAlcoholica;
            if (dinero >= costo) {
                dinero -= costo;
                let bebidaSeleccionada = (bebida === '4' || bebida === '5') ? bebidasSinAlcohol[bebida - 4] : bebidas[bebida - 1];
                alert(`¡Disfruta tu ${bebidaSeleccionada}! Te quedan ${dinero} Pesos.`);
            } else {
                alert(mensajes[3]);
            }
        }
    }
}


function iniciarSimulador() {
    for (let i = 0; i < 1; i++) {
        const edad = solicitarEdad();
        const dinero = solicitarDinero();
        const resultado = verificarEntrada(edad, dinero);
        mostrarResultado(resultado);
    }
}


iniciarSimulador();
