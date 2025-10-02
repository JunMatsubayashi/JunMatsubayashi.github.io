/* Slideshow functionality.
 * The slideshow automatically cycles through slides every few seconds.  
 * Clicking the previous/next arrows manually moves by one slide.  
 * Clicking anywhere on the slideshow pauses/resumes the automatic cycling. */

let slideIndex = 0;
let slideInterval = null;
let playing = true;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function pauseSlideshow() {
    if (playing) {
        clearInterval(slideInterval);
        playing = false;
    } else {
        startSlideshow();
        playing = true;
    }
}

// Initialize the slideshow on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    startSlideshow();
    const slideshow = document.getElementById('slideshow');
    if (slideshow) {
        slideshow.addEventListener('click', pauseSlideshow);
    }
});