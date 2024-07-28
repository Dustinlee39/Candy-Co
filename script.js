document.addEventListener("DOMContentLoaded", () => {
    // Enable smooth scrolling
    enableSmoothScrolling();

    // Enable keyboard navigation for focus management
    enableKeyboardNavigation();

    // Initialize date picker
    initializeFlatpickr();

    // Initialize booking form
    initializeBookingForm();
});

// Function to enable smooth scrolling for anchors
function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function to enable keyboard navigation
function enableKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = document.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault();
                    lastFocusableElement.focus();
                }
            } else { // Tab
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }
    });
}

// Mock API call to fetch available times for the selected date
function fetchAvailableTimes(date) {
    // Replace this with actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]);
        }, 1000); // Simulating network delay
    });
}

// Update available times in the dropdown
async function updateAvailableTimes(date) {
    const availableTimes = await fetchAvailableTimes(date);
    const timeSelect = document.getElementById("time");
    timeSelect.innerHTML = '<option value="" disabled selected>Select a time</option>';
    availableTimes.forEach(time => {
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

// Handle date change in the date picker
function handleDateChange(selectedDates, dateStr) {
    updateAvailableTimes(dateStr);
}

// Initialize flatpickr for the date input field
function initializeFlatpickr() {
    const dateInput = document.getElementById("date");
    flatpickr(dateInput, {
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
}

// Initialize booking form with date picker and available times
function initializeBookingForm() {
    const dateInput = document.getElementById("date");
    flatpickr(dateInput, {
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
}