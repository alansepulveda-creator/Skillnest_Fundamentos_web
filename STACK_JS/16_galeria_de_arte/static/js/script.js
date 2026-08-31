const imagen = document.getElementById("imagen")
const imagenNueva = "static/images/principios.jfif";
const imagenantigua = "static/images/campo.jfif"

const desc = document.getElementById("descripcion")
imagen.addEventListener("mouseover", function () {
this.src = imagenNueva;
desc.textContent = "Principios de junio de 1889, Vincent Van Gogh (1889)"
});

imagen.addEventListener("mouseout", function () {
this.src = imagenantigua;
desc.textContent = "Campo de trigo con cipreses, Vincent Van Gogh (1889)"
});