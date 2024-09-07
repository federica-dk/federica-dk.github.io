function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


var headings = ['CS Researcher','Head of Techiang & Learning Committee at TBSC', 'Debater Afficionada', 'Theatre-kid', 'IBDP Student'];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('section__text__p2').innerHTML = headings[i];
  if (i == (headings.length - 1)) {
    i = 0;
    //you can even clear interval here to make heading stay as last one in array
    //cleanInterval(intervalId);

  } else {
    i++;
  }
}, 4000)

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