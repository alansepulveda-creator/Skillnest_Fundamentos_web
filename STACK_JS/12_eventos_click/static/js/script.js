console.log("prueba de conexion");

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#100457", "#9370db", "#0bff02", "#4682b4", "#7affff", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const = elemento = document.querySelector("#colorbutton");
    elemento.style.backgroundColor
    document.body.style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor2();
});

// Función que cambia el color de las letras al hacer clic
function cambiarColor2() {
    let colores = ["#00d9ff", "#000007", "#5400fd", "#ffd700", "#0089fa", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.color = colorAleatorio;
}

document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColor3();
});


// Función que cambia el color de fondo al hacer clic
function cambiarColor3() {
    let colores = ["HOLA", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "crimson"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.color = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
}