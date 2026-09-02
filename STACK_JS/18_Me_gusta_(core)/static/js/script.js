var likesRei = 0;
var likesAsuka = 0;
var likesShinji = 0;

var textoLikesRei = document.getElementById("likesRei");
var botonLikeRei = document.getElementById("btnRei");

botonLikeRei.onclick = function () {
    likesRei = likesRei + 1;
    textoLikesRei.innerText = likesRei + " like(s)";
};

var textoLikesAsuka = document.getElementById("likesAsuka");
var botonLikeAsuka = document.getElementById("btnAsuka");

botonLikeAsuka.onclick = function () {
    likesAsuka = likesAsuka + 1;
    textoLikesAsuka.innerText = likesAsuka + " like(s)";
};

var textoLikesShinji = document.getElementById("likesShinji");
var botonLikeShinji = document.getElementById("btnShinji");

botonLikeShinji.onclick = function () {
    likesShinji = likesShinji + 1;
    textoLikesShinji.innerText = likesShinji + " like(s)";
};