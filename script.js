let currentSlide = 0;
const slides = document.querySelectorAll('#blog-slider .blog-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);

// Automatic slide change every 5 seconds
setInterval(nextSlide, 2000);
