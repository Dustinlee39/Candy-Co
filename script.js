document.addEventListener('DOMContentLoaded', (event) => {
    // Function to start playing the video
    function playVideo() {
        // Get the iframe element
        const iframe = document.getElementById('myVideo');
        
        // Check if the iframe exists
        if (iframe) {
            // Update the src attribute to include the autoplay parameter
            let src = iframe.src;
            if (!src.includes('autoplay=1')) {
                iframe.src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
            }
        }
    }
    
    // Create an invisible timer that waits for 3 seconds
    setTimeout(playVideo, 3000); // 3000 milliseconds = 3 seconds
});