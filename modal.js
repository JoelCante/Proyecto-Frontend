var contenedor_modal = document.getElementById("modal");
var abrir = document.getElementById("buscar");
var abrir2 = document.getElementById("buscar2");
var contenedor_modal2 = document.getElementById("modaltiempo");
var cerrar = document.getElementById("Cerrar");
var sugerencia = document.getElementById("sugerencia");
var abrirsug = document.getElementById("sug");
var cerrar2 = document.getElementById("search");
abrir.onclick = function () {
  contenedor_modal.style.display = "block";
};

abrir2.onclick = function () {
  contenedor_modal.style.display = "block";
};


abrirsug.onclick = function () {
  sugerencia.style.display = "block";
};

cerrar.onclick = function () {
  contenedor_modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == contenedor_modal) {
    contenedor_modal.style.display = "none";
    sugerencia.style.display = "none";
  }
};


function tiempo() {
  contenedor_modal2.style.display = "block";
}

setTimeout(tiempo, 2000);