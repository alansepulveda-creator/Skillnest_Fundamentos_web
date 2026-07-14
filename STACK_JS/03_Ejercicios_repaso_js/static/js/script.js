console.log("conexion con js exitosa...")

//ejemplo bucle for
function contarhasta2(){
for (let i = 0; i < 3; i++) {
    alert(i);
}
}
function cuentaregresiva(){
for (let i = 10; i > 0; i--) {
    alert(i);
}
}
function recorrerlista(){
let usuarios = ["Ana", "Luis", "María"];
// Lista de datos (array/lista)
// [] = ["nombre", 4, true, [2,4]]
/*let nombre = "carlos";
alert(nombre);
let nombres = ["carlos", "maria"]
alert(nombres[0]) --> Imprime carlos
alert(nombres[1] --> Imprime maria)*/ 
for (let i = 0; i < usuarios.length; i++) {
    alert("Bienvenido, " + usuarios[i]);
}
}
//ejemplo bucle while
function reproducircancion(){
let reproduciendo = true;

while (reproduciendo) {
    alert("La canción sigue sonando...");
   // Simulación de una acción que detendría la reproducción
    reproduciendo = false;
}
}
function cargardatos(){
    let datosPendientes = 5;

while (datosPendientes > 0) {
    alert("Cargando datos...");
    datosPendientes--;
}
}
function validarcontrasena(){
    let contraseñaCorrecta = false;

while (!contraseñaCorrecta) {
    let intento = prompt("Ingresa tu contraseña:");
    if (intento === "1234") {
        contraseñaCorrecta = true;
        alert("Acceso concedido.");
    } else {
        alert("Contraseña incorrecta, intenta de nuevo.");
    }
}
}