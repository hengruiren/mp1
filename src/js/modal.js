/**
 * Coffee detail modal: opened from a menu card, closed with the close button,
 * a click on the backdrop, or the Escape key.
 */

import { coffeeDetails } from './coffee-data.js';

export function initCoffeeModal() {
    const cards = document.querySelectorAll('[data-coffee]');
    const modal = document.querySelector('#coffee-modal');
    const closeButton = document.querySelector('.coffee-modal__close');
    const image = document.querySelector('#coffee-modal-image');
    const title = document.querySelector('#coffee-modal-title');
    const description = document.querySelector('#coffee-modal-description');
    const details = document.querySelector('#coffee-modal-details');

    if (!modal || !closeButton) {
        return;
    }

    let lastFocusedElement = null;
    let backgroundState = [];

    function openModal(coffeeKey) {
        const coffee = coffeeDetails[coffeeKey];

        if (!coffee) {
            return;
        }

        lastFocusedElement = document.activeElement;

        image.src = coffee.image;
        image.alt = `Illustration of ${coffee.title}`;
        title.textContent = coffee.title;
        description.textContent = coffee.description;
        details.textContent = coffee.details;

        modal.hidden = false;
        document.body.classList.add('modal-open');
        backgroundState = [...document.querySelectorAll('body > header, body > main, body > footer')]
            .map((element) => ({ element, inert: element.inert }));
        backgroundState.forEach(({ element }) => { element.inert = true; });
        closeButton.focus();
    }

    function closeModal() {
        if (modal.hidden) {
            return;
        }

        modal.hidden = true;
        document.body.classList.remove('modal-open');
        backgroundState.forEach(({ element, inert }) => { element.inert = inert; });

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    cards.forEach((card) => {
        card.addEventListener('click', () => openModal(card.dataset.coffee));
    });

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (modal.hidden) return;

        if (event.key === 'Escape') {
            event.preventDefault();
            closeModal();
        }

        if (event.key === 'Tab') {
            const focusable = [...modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')]
                .filter((element) => !element.disabled && element.tabIndex >= 0 && element.getClientRects().length);
            const first = focusable[0] || closeButton;
            const last = focusable[focusable.length - 1] || closeButton;

            if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
                event.preventDefault();
                first.focus();
            }
        }
    });
}
