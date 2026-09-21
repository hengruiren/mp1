/**
 * "From bean to cup" carousel: cycles three slides via the arrow buttons.
 */

export function initCarousel() {
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const previousButton = document.querySelector('.carousel-button--previous');
    const nextButton = document.querySelector('.carousel-button--next');

    if (slides.length < 3 || !previousButton || !nextButton) {
        return;
    }

    let currentIndex = 0;

    function showSlide(newIndex) {
        currentIndex = (newIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;

            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });
    }

    previousButton.addEventListener('click', () => showSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

    showSlide(0);
}
