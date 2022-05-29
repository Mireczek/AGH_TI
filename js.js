function showMenu() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function selectedSlide(n) {
    showSlides(slideIndex = n);
}

setInterval(nextSlide, 5000);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow-slide");
    let dots = document.getElementsByClassName("slideshow-dot");
    if (n > slides.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

var limitDate = new Date(2022,5,7,11,0,0).getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = limitDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-show");
      } else {
        reveals[i].classList.remove("active-show");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);