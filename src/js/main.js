/**
 * Daily Brew Coffee — behaviour entry point.
 *
 * Each interactive part of the page lives in its own module and exposes a
 * single `init` function, so this file only wires them up.
 */

import { initNavbar } from './navbar.js';
import { initCarousel } from './carousel.js';
import { initCoffeeModal } from './modal.js';
import { initBackgroundVideo } from './background-video.js';

initNavbar();
initCarousel();
initCoffeeModal();
initBackgroundVideo();
