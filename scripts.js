document.addEventListener("DOMContentLoaded", function() {


let currentSlide = 0;
const carouselItems = document.querySelectorAll(".carousel-item");

function goToSlide(slideIndex) {
    carouselItems[currentSlide].classList.remove("active");
    currentSlide = (slideIndex + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].classList.add("active");
    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function nextSlide() {
    goToSlide(currentSlide +1) 

              });
