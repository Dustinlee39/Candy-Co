// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize gallery
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
            img.style.opacity = index === 0 ? '1' : '0';
        });

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    };

    handleGalleryTransitions();

    // Smooth scrolling
    const enableSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    enableSmoothScrolling();

    // Keyboard navigation
    const enableKeyboardNavigation = () => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
                const focusableContent = document.querySelectorAll(focusableElements);
                const firstFocusableElement = focusableContent[0];
                const lastFocusableElement = focusableContent[focusableContent.length - 1];

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    };

    enableKeyboardNavigation();

    // Booking form initialization
    const fetchAvailableTimes = (date) => {
        // Mock API call to fetch available times for the selected date
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]);
            }, 1000);
        });
    };

    const updateAvailableTimes = async (date) => {
        const availableTimes = await fetchAvailableTimes(date);
        const timeSelect = document.getElementById('time');
        timeSelect.innerHTML = '<option value="" disabled selected>Select a time</option>';
        availableTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    };

    const handleDateChange = (selectedDates, dateStr) => {
        updateAvailableTimes(dateStr);
    };

    const initializeFlatpickr = () => {
        flatpickr("#date", {
            enableTime: false,
            dateFormat: "Y-m-d",
            minDate: "today",
            disable: [
                function(date) {
                    return (date.getDay() === 0 || date.getDay() === 6); // Disable Saturdays and Sundays
                }
            ],
            locale: "en",
            onChange: handleDateChange
        });
    };

    initializeFlatpickr();
});