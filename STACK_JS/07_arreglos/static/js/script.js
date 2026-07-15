console.log("conexion exitosa con js...")
// function ejercicio1(){
// let nombre1 = "Ana";
// let nombre2 = "Pedro";
// let nombre3 = "María";
// let nombre4 = "Carlos";

// let nombres = ["Ana","Pedro","María","Carlos"]
// alert(`${nombres[2]}`)
// }
// function ejercicio2(){
// let compras = [5000, 2300, 12000, 4500, 3000];
// let alumnos = ["Ana", "Pedro", "María", "José"];
// let datos = ["Carlos", 18, true];
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
// //desafio: formar una oración con elementos de las distintas variables
// let mensaje =`${alumnos[1]} quiere comprar 1kg de ${frutas[2]}, y pregunta si esta a ${compras[4]}$ y el vendedor dice ${datos[2]}`
// alert(mensaje)
// }
// //La propiedad `.length` devuelve la cantidad de elementos.
// let fruta = ["Manzana", "Pera", "Kiwi", "Sandía"];

// console.log(fruta.length);
// //obtener el ultimo elemento
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// let ultima = fruta[fruta.length - 1];
// //variable.lenght - 1 siempre trae el ultimo elemento
// console.log(ultima);

// //desafio
// //Del arreglo ["Hola","a","todos","los","programadores!"].
// //Mostrar el penultimo elemento y el ultimo concatenado.
// function ejercicio3(){
// let algo = ["Hola","a","todos","los","programadores!"]
// console.log(algo[algo.length - 2] + " " + algo[algo.length - 1])
// }
// let listaTareas = ["Barrer","Cocinar","Realizar compras"]
// function manipulararreglo(listaTareas){
//     //Modificar un elemento del arreglo
//     listaTareas[1] = "Construir";
// //añadir un elemento al final de la lista
// listaTareas.push("Cocinar");
// //eliminar el ultimo elemento y mostrarlo
// let eliminado = listaTareas.pop()
// //añadir un elemento al inicio de la lista
// listaTareas.unshift("Boxear")
// //eliminar el primer elemento de la lista
// eliminado += listaTareas.shift();
// //mostrar resultado
// alert("Elementos eliminados: "+ eliminado);
// }

// # 💻 Ejercicios

// ## Ejercicio 1

// Crear el siguiente arreglo.

// ```javascript
// let edades = [15,18,20,14,25];
// ```

// Mostrar:

// - Primera edad.
// - Última edad.
// - Cantidad de elementos.

// ---
function ed(){
let edades = [15,18,20,14,25]
alert("la primera edad es " + edades[0] + ", la ultima edad es " + edades[edades.length - 1] + " y la cantidad de edades es " +edades.length)
}
// ## Ejercicio 2

// Crear un arreglo con cinco nombres.

// Mostrar todos utilizando un ciclo `for`.

// ---
function no(){
let nombres = ["juan","javier","michael","matias","vicente"]
for (let i = 0; i <= 4; i++){
alert(nombres[i])}
}

// ## Ejercicio 3

// Crear un arreglo con cinco notas.

// Calcular el promedio.

// Mostrar:

// ```text
// Promedio: X
// ```

// ---

function CincoNotas(){
let notas = [8, 7, 9, 6, 10];
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];}
let promedio = suma / notas.length;
alert("Promedio: " + promedio);
}

// ## Ejercicio 4

// Crear el arreglo.

// ```javascript
// [18,20,15,22,19,25,17]
// ```

// Mostrar solamente las temperaturas mayores a 20.

// ---

function Temperaturas(){
    let temperaturas = [18, 20, 15, 22, 19, 25, 17];
    let masde20 = [];
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 20) {
            masde20.push(temperaturas[i]);}
    }
    alert("Temperaturas mayores a 20: " + masde20.join(", "));
}

// ## Ejercicio 5

// Crear un arreglo con diez números.

// Contar:

// - Cuántos son pares.
// - Cuántos son impares.

// ---

function contarParImpar() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    alert("Números pares: " + pares + ", Números impares: " + impares);
}

// ## Ejercicio 6

// Crear el siguiente arreglo.

// ```javascript
// [5000,12000,3000,4500,7000]
// ```

// Mostrar:

// - Venta mayor.
// - Venta menor.
// - Total vendido.

// ---

// ## Ejercicio 7

// Crear el siguiente arreglo.

// ```javascript
// ["Ana","Pedro","María","Juan","Camila","Tomás"]
// ```

// Mostrar únicamente los nombres con más de cuatro letras.

// ---

// ## Ejercicio 8

// Crear un arreglo con ocho números.

// Mostrar únicamente los múltiplos de 3.

// ---

// ## Ejercicio 9

// Crear el siguiente arreglo.

// ```javascript
// [15,16,17,18,17,16,19,20]
// ```

// Calcular:

// - Cantidad de mayores de edad.
// - Cantidad de menores de edad.

// ---

// ## Ejercicio 10 (Desafío)

// ```javascript
// let ventas = [12000,18000,5000,21000,9000,15000,8000];
// ```

// Mostrar:

// - Total de ventas.
// - Promedio.
// - Venta mayor.
// - Venta menor.
// - Cantidad de ventas mayores a $10.000.
// - Cantidad de ventas menores o iguales a $10.000.
// - Índice donde ocurrió la venta mayor.
// - Índice donde ocurrió la venta menor.

// ---

// # 🚀 Desafío Final

// Una empresa registra las ventas de sus vendedores.

// ```javascript
// let vendedores = ["Ana","Pedro","María","José","Camila"];

// let ventas = [350000,510000,420000,610000,480000];
// ```

// Desarrolla un programa que permita:

// 1. Mostrar cada vendedor con su venta.
// 2. Calcular el total vendido.
// 3. Calcular el promedio.
// 4. Mostrar el mejor vendedor.
// 5. Mostrar el vendedor con menor venta.
// 6. Mostrar los vendedores que vendieron más de $450.000.
// 7. Contar cuántos vendedores superaron el promedio.
// 8. Indicar si la empresa alcanzó una meta de **$2.300.000**.

// ### ⭐ Desafío Extra

// Permite que el usuario agregue nuevas ventas utilizando:

// - `push()`
// - `pop()`
// - `shift()`
// - `unshift()`

// y vuelve a calcular todas las estadísticas automáticamente.