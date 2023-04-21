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
        goToSlide(currentSlide + 1);
    }

    updateDots(currentSlide); // Add this line
    
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;
});

function createDots() {
    const carouselIndicators = document.querySelector('.carousel-indicators');
    carouselItems.forEach((item, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(dot);
    });
}

function updateDots(slideIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    createDots();
    // ...
});

