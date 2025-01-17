document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('#faq .faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
