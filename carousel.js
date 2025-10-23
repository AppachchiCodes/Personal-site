// carousel.js - Pet Projects Carousel

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
let autoplayInterval;

// Initialize carousel
function initCarousel() {
  updateCarousel();
  startAutoplay();
  
  // Add event listeners
  document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
  document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
  
  // Pause autoplay on hover
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', stopAutoplay);
  carouselContainer.addEventListener('mouseleave', startAutoplay);
}

function updateCarousel() {
  // Move the track
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function startAutoplay() {
  stopAutoplay(); 
  autoplayInterval = setInterval(nextSlide, 3000); 
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}