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
//calcula la funcion trigonometrica 
function agregarFuncion(sfuncion){
    if(sfuncion === "sin"){
        const expresion = document.getElementById("pantalla").value;
        const resultado = Math.sin(eval(expresion));
        const resultadoRedondeado = resultado.toFixed(3); // Reducir a 3 decimales
        document.getElementById("pantalla").value = resultadoRedondeado;
    }
    if(sfuncion === "cos"){
        const expresion = document.getElementById("pantalla").value;
        const resultado = Math.cos(eval(expresion));
        const resultadoRedondeado = resultado.toFixed(3); 
        document.getElementById("pantalla").value = resultadoRedondeado;
     }
     if(sfuncion === "tan"){
        const expresion = document.getElementById("pantalla").value;
        const resultado = Math.tan(eval(expresion));
        const resultadoRedondeado = resultado.toFixed(3);
        document.getElementById("pantalla").value = resultadoRedondeado;
     }
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



