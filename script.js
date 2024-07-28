// JavaScript for handling various functionalities on the website

// Example: Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Example: Handling form submission (For contact form)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form submission logic here (e.g., using Fetch API or XMLHttpRequest)
        const formData = new FormData(contactForm);
        
        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle success (e.g., show a success message)
            alert('Thank you for contacting us! We will get back to you soon.');
        })
        .catch(error => {
            // Handle error (e.g., show an error message)
            console.error('There was a problem with the form submission:', error);
            alert('There was an error submitting the form. Please try again later.');
        });
    });
}

// Example: Handling dynamic content for reviews section
const reviewsSection = document.querySelector('#reviews');
if (reviewsSection) {
    const reviews = [
        // Example review data
        { name: 'John Doe', review: 'SEND ME INFO TO FILL IN' },
        { name: 'Jane Smith', review: 'SEND ME INFO TO FILL IN' }
    ];
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        
        reviewElement.innerHTML = `
            <p>${review.review}</p>
            <span>★★★★★</span>
            <p>— ${review.name}</p>
        `;
        
        reviewsSection.appendChild(reviewElement);
    });
}

// Example: Toggle FAQ answers visibility
const faqItems = document.querySelectorAll('#faqs .faq');
faqItems.forEach(faq => {
    const question = faq.querySelector('h3');
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});