
let botonSesion = document.getElementById("BotonSesion");

botonSesion.addEventListener("click", function () {
    let textoBotonSesion = botonSesion.textContent;
    if (textoBotonSesion === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
    
});

let botonMegusta = document.getElementById("Megusta1")
let megustas = 12

botonMegusta.addEventListener ("click", function(){
    megustas++
    this.innerText = `${megustas} Me gustas`;
})

let botonMmegusta = document.getElementById("Megusta2")
let mmegustas = 30

botonMmegusta.addEventListener ("click", function(){
    mmegustas++
    this.innerText = `${mmegustas} Me gustas`;
})


let perfil = document.getElementById("VerPerfil")


perfil.addEventListener ("click", function(){
    alert("Has entrado a tu perfil");
})