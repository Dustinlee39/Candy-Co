const CandyCo = (() => {
    const reviews = [
        {
            text: "Candy & Co is fantastic! They made me look beautiful on my wedding day!",
            rating: 5
        },
        {
            text: "The best makeup service I've ever used. Highly recommended!",
            rating: 5
        },
        {
            text: "Amazing experience! The team was professional and made my day special.",
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
            answer: "$50"
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

    const renderReviews = () => {
        const reviewsContainer = document.querySelector('.reviews-section');
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `<p>"${review.text}"</p><span>${'⭐'.repeat(review.rating)}</span>`;
            reviewsContainer.appendChild(reviewElement);
        });
    };

    const renderFAQs = () => {
        const faqsContainer = document.querySelector('.faqs-section');
        faqs.forEach(faq => {
            const faqElement = document.createElement('div');
            faqElement.classList.add('faq');
            faqElement.innerHTML = `<h3>${faq.question}</h3><p>${faq.answer}</p>`;
            faqsContainer.appendChild(faqElement);
        });
    };

    return {
        init: () => {
            renderReviews();
            renderFAQs();
        }
    };
})();

document.addEventListener('DOMContentLoaded', CandyCo.init);
