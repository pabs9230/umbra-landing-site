// This file handles the gallery functionality, including image sliders or lightbox effects.

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox img');
    const closeLightbox = document.querySelector('.lightbox .close');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.classList.add('active');
            lightboxImage.src = this.src;
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
});