document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the scrolling effect
    function startScrollingImages() {
        const container = document.querySelector('.scrolling-images');
        const images = [
            'images/photo1.jpg',
            'images/photo2.jpg',
            // Add more images as needed
        ];

        // Create and append image elements
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Scrolling Image';
            container.appendChild(img);
        });

        // Ensure the container has enough height to accommodate scrolling
        const imageCount = images.length;
        container.style.height = `${imageCount * 100}vh`;
    }

    // Function to handle opacity changes for the overlay
    function setOverlayOpacity() {
        const overlay = document.querySelector('.content-overlay');
        overlay.style.opacity = '0.67'; // Set to 66% opacity
    }

    // Function to handle video visibility
    function setVideoVisibility() {
        const video = document.querySelector('.background-video');
        video.style.opacity = '0'; // Make video invisible
    }

    // Start scrolling images
    startScrollingImages();

    // Set overlay opacity and video visibility
    setOverlayOpacity();
    setVideoVisibility();
});