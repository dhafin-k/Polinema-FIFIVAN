

const navbar = document.getElementById("nav");
const menu = document.getElementById("menu");
const burger = document.getElementById("hamburger");
const mobile = document.getElementById('mobile-menu');

window.onscroll = () => {
    if (window.pageYOffset > 350) {
        navbar.style.background = "#fff";
        navbar.style.transition = ".7s ease-in-out";
        menu.style.color = "black";
        burger.style.color = "black";
    } else {
        navbar.style.background = "none";
        menu.style.color = "white";
        burger.style.color = "white";
    }
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
    }
});


let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.width = '80vw';
        slides[i].style.margin = 'auto'
        slides[i].classList.remove("active"); /* Remove active class for hidden slides */
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" opacity-100", "");
      }
      slides[slideIndex - 1].style.display = "block";
      slides[slideIndex - 1].classList.add("active"); /* Add active class to display transition */
      dots[slideIndex - 1].className += " opacity-100";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }