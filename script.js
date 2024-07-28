// Function to start the embedded video
function startEmbeddedVideo() {
    // Select the iframe using the class 'hidden-video'
    const videoFrame = document.querySelector('.hidden-video');

    // Check if the iframe exists
    if (videoFrame) {
        // Set a timeout to start the video 3 seconds after the site is loaded
        setTimeout(() => {
            // Use postMessage to trigger video playback
            videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }, 3000); // 3000 milliseconds = 3 seconds
    }
}

// Run the function when the page has fully loaded
window.addEventListener('load', startEmbeddedVideo);