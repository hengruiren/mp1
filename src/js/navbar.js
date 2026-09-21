/**
 * Sticky navigation bar: shrinks on scroll and highlights the section the
 * reader is currently looking at.
 */

const SHRINK_THRESHOLD = 20;

/**
 * Mark the navigation link that points at `sectionId` as current.
 * @param {NodeListOf<HTMLAnchorElement>} links
 * @param {string} sectionId
 */
function highlightNavigationLink(links, sectionId) {
    links.forEach((link) => {
        const isCurrentSection =
            link.getAttribute('href') === `#${sectionId}`;

        link.classList.toggle('active', isCurrentSection);

        if (isCurrentSection) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

export function initNavbar() {
    const header = document.querySelector('.site-header');
    const links = document.querySelectorAll('.main-navigation a');
    const sections = document.querySelectorAll('.page-section');

    if (!header || sections.length === 0) {
        return;
    }

    function updateNavbarSize() {
        header.classList.toggle(
            'site-header--small',
            window.scrollY > SHRINK_THRESHOLD
        );
    }

    function updatePositionIndicator() {
        const pageBottom = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // At the very bottom the last section may be too short to reach the
        // navbar, so highlight it explicitly.
        if (pageBottom >= documentHeight - 2) {
            highlightNavigationLink(links, sections[sections.length - 1].id);
            return;
        }

        const readingPosition = header.getBoundingClientRect().bottom + 1;
        let currentSection = sections[0];

        sections.forEach((section) => {
            const box = section.getBoundingClientRect();

            if (box.top <= readingPosition && box.bottom > readingPosition) {
                currentSection = section;
            }
        });

        highlightNavigationLink(links, currentSection.id);
    }

    function updatePageOnScroll() {
        updateNavbarSize();
        updatePositionIndicator();
    }

    window.addEventListener('scroll', updatePageOnScroll);
    window.addEventListener('resize', updatePositionIndicator);

    // Section heights change as media and fonts load, so recompute on resize.
    const layoutObserver = new ResizeObserver(updatePositionIndicator);
    layoutObserver.observe(header);
    sections.forEach((section) => layoutObserver.observe(section));

    updateNavbarSize();
    updatePositionIndicator();
}
