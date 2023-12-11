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

document.addEventListener('DOMContentLoaded', function () {
  // Get the loading text element
  const loadingText = document.getElementById('loadingText');

  // Split the text content into characters
  const characters = loadingText.innerHTML.split('');

  // Clear the original text content
  loadingText.innerHTML = '';

  // Iterate over each character and create a span for it
  characters.forEach((char, index) => {
    const charElement = document.createElement('span');
    charElement.innerHTML = char;

    // Apply animation delay for each character
    charElement.style.animation = `bounceFadeIn 1s steps(20, end) ${index * 0.1}s forwards`;

    // Append the character to the loading text element
    loadingText.appendChild(charElement);
  });

  // After the animation, execute the blog slider setup
  const animationDuration = characters.length * 0.1 * 1000; // total animation duration in milliseconds

  setTimeout(() => {
    // Hide the loading section
    document.querySelector('.loading-container').style.display = 'none';

    // Scroll to the "Home" section with a smooth animation
    document.getElementById('Home').scrollIntoView({
      behavior: 'smooth'
    });

    // Initial setup for the blog slider
    showSlide(currentSlide);

    // Automatic slide change every 5 seconds
    setInterval(() => {
      nextSlide();
    }, 2000);
  }, animationDuration);
});
