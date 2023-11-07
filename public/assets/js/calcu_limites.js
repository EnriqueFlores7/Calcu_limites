let Valor_Tiende_x = -2;
let expresion = "3*x**4+2*x**2-x+1";

//Valores que se aproxima por la derecha 
function Valores_Tiende_Izquierda(Valor_Tiende_x) {
    let valor_x = [0.01, 0.001, 0.0001, 0.00001, 0.000001];
    let resta = [4];
    for (let contador = 0; contador < valor_x.length; contador++) {
        resta[contador] = Valor_Tiende_x - valor_x[contador];
    }
    //console.log("Valor con el cual nos acercamos a "+Valor_Tiende_x+" por la izquierda.");
    return resta[2];
}

//Valores que se aproxima por la izquierda
function Valores_Tiende_Derecha(Valor_Tiende_x) {
    let valor_x = [0.01, 0.001, 0.0001, 0.00001, 0.000001];
    let suma = [4];
    for (let contador = 0; contador < valor_x.length; contador++) {
        suma[contador] = Valor_Tiende_x + valor_x[contador];
    }
    //console.log("Valor con el cual nos acercamos a "+Valor_Tiende_x+" por la derecha.");
    return suma[2];
}

//Evaluar la expresion
function evaluarExpresion(expresion, Valor_Tiende_x) {
    let expresionValores = expresion.replace(/x/g, Valor_Tiende_x);
    return eval(expresionValores);
}

//Evaluar la funcion por la derecha
function evaluarExpresionDerecha(expresion, Valor_Tiende_x) {
    let x = Valores_Tiende_Derecha(Valor_Tiende_x);
    let resultado = eval(expresion);
    let numeroRedondeado = parseFloat(resultado.toFixed(5));
    console.log("Valor de el limite ("+expresion+") con el valor de :"+x);
    return numeroRedondeado;
}

//Evaluar por la izquierda
function evaluarExpresionIzquierda(expresion, Valor_Tiende_x) {
    let x = Valores_Tiende_Izquierda(Valor_Tiende_x);
    let resultado = eval(expresion);
    let numeroRedondeado = parseFloat(resultado.toFixed(5));
    console.log("Valor de el limite ("+expresion+") con el valor de :"+x);
    return numeroRedondeado;
}
console.log(evaluarExpresionDerecha(expresion, Valor_Tiende_x));
console.log(evaluarExpresionIzquierda(expresion, Valor_Tiende_x));
console.log(evaluarExpresion(expresion, Valor_Tiende_x));

function Limite_Existe() {
    
}