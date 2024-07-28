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
        // Add more reviews as needed
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
        // Add more FAQs as needed
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

    return {
        init: () => {
            renderReviews();
            renderFAQs();
            enableKeyboardNavigation();
        }
    };
})();

document.addEventListener('DOMContentLoaded', CandyCo.init);