var likesRei = 0;
var likesAsuka = 0;
var likesShinji = 0;

var textoLikesRei = document.querySelector("#likesRei");
var botonLikeRei = document.querySelector("#btnRei");

botonLikeRei.onclick = function () {
    likesRei = likesRei + 1;
    textoLikesRei.innerText = likesRei + " like(s)";
};

var textoLikesAsuka = document.querySelector("#likesAsuka");
var botonLikeAsuka = document.querySelector("#btnAsuka");

botonLikeAsuka.onclick = function () {
    likesAsuka = likesAsuka + 1;
    textoLikesAsuka.innerText = likesAsuka + " like(s)";
};

var textoLikesShinji = document.querySelector("#likesShinji");
var botonLikeShinji = document.querySelector("#btnShinji");

botonLikeShinji.onclick = function () {
    likesShinji = likesShinji + 1;
    textoLikesShinji.innerText = likesShinji + " like(s)";
};