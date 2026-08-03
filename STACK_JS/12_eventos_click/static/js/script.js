console.log("prueba de conexion");

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColorBody();
});

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColorCaja1();
});

document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColorCaja2();
});



function cambiarColorBody() {
    let colores = ["#ff6347", "#01f8a6", "#7652be", "#ffd700", "#093b64", "#d67047"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("body")
    document.body.style.backgroundColor = colorAleatorio;
}

function cambiarColorCaja1() {
    let colores = ["#9e2813", "#2aa87e", "#5c35ac", "#bda72b", "#2876b6", "#b93f0e"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja1");
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiarColorCaja2() {
    let colores = ["#ec2907", "#a8fce0", "#1c0a41", "#554908", "#010b13", "#9c4c2d"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja2");
    elemento.style.backgroundColor = colorAleatorio;
}