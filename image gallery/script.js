// JavaScript for the interactive gallery

// Get the lightbox element
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item');

// Function to open lightbox
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
    currentIndex = index;
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to show next image
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.classList.add('fade-out');  // Add fade-out class
    setTimeout(() => {
        lightboxImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
        lightboxImg.classList.remove('fade-out');  // Remove fade-out class after image loads
    }, 300);  // Delay for the fade-out animation
}

// Function to show previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.classList.add('fade-out');  // Add fade-out class
    setTimeout(() => {
        lightboxImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
        lightboxImg.classList.remove('fade-out');  // Remove fade-out class after image loads
    }, 300);  // Delay for the fade-out animation
}

// Event listeners for gallery images
images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

// Event listeners for lightbox controls
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
