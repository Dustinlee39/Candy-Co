document.addEventListener('DOMContentLoaded', () => {
    const CandyCo = (() => {
        const reviews = [
            {
                text: "Couldn't be happier! Thank you, Candy & Co! I've never felt more beautiful and pampered. I looked flawless (but still like myself), and my hair and makeup lasted all night in the July heat.",
                rating: 5
            },
            {
                text: "Couldn't be happier. Everyone was incredibly happy with their hair and makeup, from the bridal party to the flower girls. Everything looked perfect even after all the crying / dancing / sweating.",
                rating: 5
            },
            {
                text: "Candace and team were great! Thank you to Candace and team for being flexible and delivering beautiful results! I received Candace’s name through a referral and so happy I went with her team for my wedding day!",
                rating: 5
            }
        ];

        const faqs = [
            {
                question: "What is the base price for blowouts for brides?",
                answer: "$150"
            },
            {
                question: "What is the price of trial service for blowouts for brides?",
                answer: "$150"
            },
            {
                question: "What is the base price for blowouts for attendants/family members?",
                answer: "$100"
            },
            {
                question: "What is the price of trial service for blowouts for attendants/family members?",
                answer: "$100"
            }
        ];

        const createReviewElement = (review) => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `<p>"${review.text}"</p><span>${'⭐'.repeat(review.rating)}</span>`;
            return reviewElement;
        };

        const createFaqElement = (faq) => {
            const faqElement = document.createElement('div');
            faqElement.classList.add('faq');
            faqElement.innerHTML = `<h3>${faq.question}</h3><p>${faq.answer}</p>`;
            return faqElement;
        };

        const renderReviews = () => {
            const reviewsContainer = document.querySelector('.reviews-section');
            reviews.forEach(review => {
                reviewsContainer.appendChild(createReviewElement(review));
            });
        };

        const renderFAQs = () => {
            const faqsContainer = document.querySelector('.faqs-section');
            faqs.forEach(faq => {
                faqsContainer.appendChild(createFaqElement(faq));
            });
        };

        const enableKeyboardNavigation = () => {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
                    const firstFocusableElement = document.querySelectorAll(focusableElements)[0];
                    const focusableContent = document.querySelectorAll(focusableElements);
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