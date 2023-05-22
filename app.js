const argv = require('process').argv;
const calculadora = require('./Calculadora/calculadora')


const op = argv[2];
const a = +argv[3];
const b = +argv[4]; 


let resultado = 0;

if(op === "multiplicar" && (a == 0 || b == 0)){    
    return console.log("0"); 
}else{
    resultado = calculadora.multiplicar(+a, +b);
}
if(op === "dividir" && (a == 0 || b == 0)){    
    return console.log("No se puede dividir por cero");
}else{
    resultado = calculadora.dividir(+a, +b);
}
if (op === "sumar"){
    resultado = calculadora.sumar(+a, +b);
}else if (op === "restar"){
    resultado = calculadora.restar(+a, +b);
}else if(op === "raiz"){
    resultado = calculadora.raiz(+a);
}else if(op === "potencia"){
    resultado = calculadora.potencia(+a,+b);
}

console.log(resultado)
