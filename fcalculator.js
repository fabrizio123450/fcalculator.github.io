let operacionActual = "";
let resultado = document.getElementById("pantalla");
 // Funciones JavaScript para la calculadora
 function agregarCaracter(caracter) {
    // Verificar si el último carácter en la operación actual es un operador
    const ultimoCaracter = operacionActual.charAt(operacionActual.length - 1);
    
    if (esOperador(ultimoCaracter) && esOperador(caracter)) {
        return;
    }
    
    // Agregar el caracter a la operación actual
    operacionActual += caracter;
    document.getElementById("pantalla").value += caracter;
}
// devuelve los operadores
function esOperador(caracter) {
    return ['+', '-', '*', '/','.'].includes(caracter);
}

function borrar() {
    document.getElementById("pantalla").value = "";
    operacionActual = "";
}

function calcular() {
    try {
        const resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
        operacionActual = "";
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}



