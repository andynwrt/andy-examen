function saludar() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        alert("Hola " + nombre + ", suerte en tu examen");
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}

function calcularCuadrado() {
    let numero = prompt("Ingresa un número para calcular su cuadrado:");
    numero = parseFloat(numero);
    if (!isNaN(numero)) {
        alert("El cuadrado de " + numero + " es " + (numero * numero));
    } else {
        alert("Eso no es un número válido.");
    }
}
