let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function() {
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje").value

    console.log("el nombre es" + nombre)
    console.log("el email es" + email)
    console.log("el mensaje es" + mensaje)
    alert("sus datos se guardaron exitosamente")
})

