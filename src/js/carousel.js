/**
 * "From bean to cup" carousel: cycles three slides via the arrow buttons.
 */

export function initCarousel() {
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const carousel = document.querySelector('.carousel');
    const track = document.querySelector('.carousel-track');
    const dotsContainer = document.querySelector('.carousel-dots');
    const previousButton = document.querySelector('.carousel-button--previous');
    const nextButton = document.querySelector('.carousel-button--next');

    if (
        slides.length < 3 ||
        !carousel ||
        !track ||
        !dotsContainer ||
        !previousButton ||
        !nextButton
    ) {
        return;
    }

    let currentIndex = 0;
    let autoplayTimer;
    let touchStartX = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const dots = slides.map((slide, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show ${slide.querySelector('h3').textContent}`);
        dot.addEventListener('click', () => {
            showSlide(index);
            restartAutoplay();
        });
        dotsContainer.appendChild(dot);
        return dot;
    });

    function showSlide(newIndex) {
        currentIndex = (newIndex + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;

            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
            dots[index].classList.toggle('active', isActive);
            dots[index].setAttribute('aria-current', isActive ? 'true' : 'false');
        });
    }

    function stopAutoplay() {
        window.clearInterval(autoplayTimer);
    }

    function startAutoplay() {
        stopAutoplay();
        if (!reducedMotion.matches) {
            autoplayTimer = window.setInterval(() => showSlide(currentIndex + 1), 5000);
        }
    }

    function restartAutoplay() {
        startAutoplay();
    }

    previousButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        restartAutoplay();
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        restartAutoplay();
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    track.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', (event) => {
        const distance = event.changedTouches[0].clientX - touchStartX;

        if (Math.abs(distance) > 50) {
            showSlide(currentIndex + (distance < 0 ? 1 : -1));
            restartAutoplay();
        }
    }, { passive: true });

    reducedMotion.addEventListener('change', startAutoplay);

    showSlide(0);
    startAutoplay();
}
