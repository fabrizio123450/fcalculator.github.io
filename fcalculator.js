 // Funciones JavaScript para la calculadora
 function agregarNumero(numero) {
    document.getElementById("pantalla").value += numero;
}

function operacion(operador) {
    document.getElementById("pantalla").value += operador;
}

function borrar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    try {
        const resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}