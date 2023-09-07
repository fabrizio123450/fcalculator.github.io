let operacionActual = "";
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
//calcula la funcion trigonometrica 
function agregarFuncion(sfuncion){
    const expresion = document.getElementById("pantalla").value;
    let resultado;
    if(expresion === "") return;//si esta vacio no hace nada
    switch (sfuncion) {
        case "sin":
            resultado = Math.sin(eval(expresion));
            break;
        case "cos":
            resultado = Math.cos(eval(expresion));
            break;
        case "tan":
            resultado = Math.tan(eval(expresion));
            break;
        default:
            console.log("Función trigonométrica no válida.");
            return;
    }

    const resultadoRedondeado = resultado.toFixed(3);
    document.getElementById("pantalla").value = resultadoRedondeado;
}
// devuelve los operadores
function esOperador(caracter) {
    return ['+', '-', '*', '/','.'].includes(caracter);
    
}

//limpia pantalla
function borrar() {
    document.getElementById("pantalla").value = "";
    operacionActual = "";
}
//resultado
function calcular() {
    try {
        const resultado = eval(document.getElementById("pantalla").value).toFixed(3);
        document.getElementById("pantalla").value = resultado;
        operacionActual = "";
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}



