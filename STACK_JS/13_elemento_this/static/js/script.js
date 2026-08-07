// Seleccionamos el botón por su id
let boton1 = document.getElementById("cambiarTexto1");
let textoinicial1 = boton1.innerText;

boton1.addEventListener("click", function () {
    if (this.innerText === "¡Texto cambiado!") {
        this.innerText = textoinicial1;
    } else {
        this.innerText = "¡Texto cambiado!";
    }
});
let boton2 = document.getElementById("cambiarTexto2");
let textoinicial2 = boton1.innerText;

boton2.addEventListener("click", function () {
    if (this.innerText === "¡Texto cambiado!") {
        this.innerText = textoinicial1;
    } else {
        this.innerText = "¡Texto cambiado!";
    }
});

let boton3 = document.getElementById("cambiarTexto3");
let textoinicial3 = boton1.innerText;

boton3.addEventListener("click", function () {
    if (this.innerText === "¡Texto cambiado!") {
        this.innerText = textoinicial1;
    } else {
        this.innerText = "¡Texto cambiado!";
    }
});

let boton4 = document.getElementById("cambiarTexto4");
let textoinicial4 = boton1.innerText;

boton4.addEventListener("click", function () {
    if (this.innerText === "¡Texto cambiado!") {
        this.innerText = textoinicial1;
    } else {
        this.innerText = "¡Texto cambiado!";
    }
});