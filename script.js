querySelectorAll(focusableElements);
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

        const fetchAvailableTimes = (date) => {
            // Mock API call to fetch available times for the selected date
            // Replace this with actual API call
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

        const initializeBookingForm = () => {
            const dateInput = document.getElementById('date');
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
        };

        return {
            init: () => {
                renderReviews();
                renderFAQs();
                enableKeyboardNavigation();
                enableSmoothScrolling();
                initializeFlatpickr();
                initializeBookingForm();
            }
        };
    })();

    CandyCo.init();
});