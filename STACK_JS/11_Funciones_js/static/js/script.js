console.log("conexion exitosa")
// Ejemplo Función simple (sin parametros)
// function saludar() {
// alert("¡Hola, bienvenido!");
// }
// saludar();// Ejecución de una Funcion
// el parametro recibe un valor para trabajar en la funcion
// el parametro recibe el tipo de dato al momento de tomar valor
// function saludarParam(nombre) { // parametro
//     alert("¡Hola, " + nombre + "!");
// }
// saludarParam("Alan");
// saludarParam("Ariel");
// Funciones con return
function encontrarmayor(){
function encontrarMaximo(a, b) {
    if (a > b) {
        return a; // este valor se devuelve porque cumple la condicion
    } else {
        return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
// maximo guardara el valor de retorno
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);
}
// tarea
/* crear una funcion que reciba 3 parametros a, b y c
debe sumar a + b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert.
*/
function operacionmatematica(){
function operacionmatematicaabc(a, b, c) {
let calculo = a + b - c;
return calculo;
}
let numero1 = parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrese segundo numero"));
let numero3 = parseInt(prompt("Ingrese tercer numero"));
let resultado = operacionmatematicaabc(numero1, numero2, numero3)
alert(`La operacion de ${numero1} + ${numero2} - ${numero3} = ${resultado}`);
}

/*
crear una funcion que reciba un parametro y permita a traves de un bucle contar hasta este.
ej: se recibe el numero 5 y muestra: 1 - 2 - 3 - 4 - 5
*/
function mostrarConteo() {
let parametro = parseInt(prompt("Ingresar el limite del contador"));
if (parametro <= 100) {
let resultado = contadorNumeros(parametro);
alert(resultado.join(" - "));
} else {
alert("Ingrese un valor inferior a 100");
}
function contadorNumeros(a) {
let numeros = [];
for (let i = 1; i <= a; i++) {
numeros.push(i);
}
return numeros;
} 
} 
mostrarConteo();
