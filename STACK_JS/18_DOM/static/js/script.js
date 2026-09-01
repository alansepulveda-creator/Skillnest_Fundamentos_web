let titulo = document.querySelector("#titulo");
titulo.innerText = "¡Bienvenido a mi sitio!";
<img id="imagen" src="imagen-original.jpg" alt="Imagen inicial"></img>
let imagen = document.querySelector("#imagen");
imagen.src = "nueva-imagen.jpg";  // Cambia la imagen
imagen.alt = "Imagen actualizada";  // Cambia la descripción de la imagen
let boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
    boton.style.backgroundColor = "blue"; // Cambia el color del botón
    boton.style.color = "white"; // Cambia el color del texto
});
document.addEventListener("DOMContentLoaded", function () {
    let modoBtn = document.getElementById("modoBtn");

    modoBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Cambiar el texto del botón
        if (document.body.classList.contains("dark-mode")) {
            modoBtn.innerText = "Modo Claro";
        } else {
            modoBtn.innerText = "Modo Oscuro";
        }
    });
});