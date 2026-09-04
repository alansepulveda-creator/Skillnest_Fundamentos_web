let contador = 0;
let boton1 = document.querySelector("#btnMas1")
let boton2 = document.querySelector("#btnMas2")
let carro = document.querySelector("#numeroCompra")
let email = document.querySelector("#email")
let boton = document.querySelector("#botonLogin")

boton1.addEventListener("click", function() {
    if (boton1 !== null) {
        contador = contador + 1
        carro.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

boton2.addEventListener("click", function() {
    if (boton2 !== null) {
        contador = contador + 1
        carro.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

boton.addEventListener("click", function() {
    if (email.value !== "") {
        alert("Bienvenido\n" + email.value);
    } else {
        alert("Por favor, ingresa un correo valido.");
    }
});