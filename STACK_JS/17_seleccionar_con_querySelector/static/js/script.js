let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
//let h1 = document.querySelector("h1");
//console.log(h1); // <h1 id="title">¡Hola, mundo!</h1>
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">
let parrafo = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
if (boton !== null) {
boton.textContent = "Nuevo Texto";
} else {
console.log("El botón no existe.");
}