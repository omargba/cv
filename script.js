
// Boton de alerta implementado 
window.onload = function() {
  alert("¡Bienvenido a mi CV!");
};

document.getElementById("saludoBtn").addEventListener("click", function() {
  alert("¡Gracias por visitar mi CV!");
});

// --- Cambio de color del fondo del encabezado ---
const header = document.querySelector("header");
const colorBtn = document.getElementById("colorBtn");

// Paleta de colores 
const coloresFondo = [
  "linear-gradient(to bottom, #ADD8E6, #FFFFFF)", // gradiente original
  "#fde68a", // amarillo suave
  "#dcfce7", // verde claro
  "#fee2e2", // rosa claro
  "#e9d5ff", // lila
  "#fef3c7"  // crema
];

let indiceFondo = 0;

colorBtn.addEventListener("click", () => {
  indiceFondo = (indiceFondo + 1) % coloresFondo.length;
  header.style.background = coloresFondo[indiceFondo];
});





// Funcion para hora en tiempo real
function actualizarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById("horaActual").textContent = "Hora actual: " + hora;
}

setInterval(actualizarHora, 1000);
actualizarHora(); // para mostrarla al cargar


// --- Contador de clics en el botón Descargar CV ---
let contadorDescargas = 0;

const botonDescargar = document.getElementById("abrirModal");
botonDescargar.addEventListener("click", function() {
  contadorDescargas++;
  console.log(`El botón se ha presionado ${contadorDescargas} veces`);
  
  // Mostramos visualmente debajo del botón
  const textoContador = document.getElementById("contadorDescargas");
  textoContador.textContent = `Has presionado el botón ${contadorDescargas} ${contadorDescargas === 1 ? "vez" : "veces"}.`;
});





//  Carrusel de imágenes 
const imagenes = ["imagenes/fondos.jpeg", "imagenes/foto cv.png", "imagenes/ia.jpeg", "imagenes/programacion.jpeg"]; // cambia con tus rutas
let indice = 0;

function cambiarImagen() {
  const img = document.getElementById("imagen-carrusel");
  img.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + 1) % imagenes.length;
    img.src = imagenes[indice];
    img.style.opacity = 1;
  }, 500); // medio segundo de transición
}


// Cambia la imagen cada 3 segundos
setInterval(cambiarImagen, 3000);

//  Botón descargar PDF 
document.getElementById("btn-descargar").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Doc1.pdf";   
  link.download = "MiArchivo.pdf"; 
  link.click();
});

//  Mensaje de bienvenida 
function mensajeBienvenida() {
  const hora = new Date().getHours();
  let saludo = "";

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  document.getElementById("bienvenida").textContent = `${saludo} Bienvenido a mi página `;
}

  // Hacer que desaparezca después de 4 segundos
  setTimeout(() => {
    bienvenida.style.display = "none";
  }, 4000);


mensajeBienvenida();

