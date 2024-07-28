// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Set opacity of the content overlay
    const overlay = document.querySelector('.content-overlay');
    overlay.style.opacity = '0.67'; // 66% opacity

    // Set video visibility
    const video = document.querySelector('.background-video');
    video.style.opacity = '0'; // Make video invisible

    // Function to handle gallery image transitions (if needed)
    const handleGalleryTransitions = () => {
        const galleryImages = document.querySelectorAll('.gallery-container img');
        let currentIndex = 0;
        
        const showNextImage = () => {
            galleryImages[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex + 1) % galleryImages.length;
            galleryImages[currentIndex].style.opacity = '1';
        };

        galleryImages.forEach((img, index) => {
            img.style.transition = 'opacity 1s ease-in-out';
            if (index !== 0) {
                img.style.opacity = '0';
            }
        });

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    };

    // Initialize gallery transitions
    handleGalleryTransitions();
});