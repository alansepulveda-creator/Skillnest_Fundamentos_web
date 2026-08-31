const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue"
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red"
});

//Tarea
/*
crear dos botones con evento on mouseover y on mouseout

- cambiar el texto de un boton

-cambiar el color de fondo y color de texto del segundo boton
*/
const button = document.getElementById("tuBoton");

button.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    button.style.backgroundColor = "green";
    button.style.color = "white";
});

button.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    button.style.backgroundColor = "yellow";
    button.style.color = "black";
});


const buton = document.getElementById("Boton");

buton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    buton.textContent = "El ratón está sobre el botón";
});
buton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    buton.textContent = "Pasa el cursor sobre mí";
});