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

