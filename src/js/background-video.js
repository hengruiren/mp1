export function initBackgroundVideo() {
    const video = document.querySelector('.story-background-video');
    const button = document.querySelector('.story-video-toggle');
    if (!video || !button) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateLabel = () => {
        button.textContent = video.paused ? 'Play background video' : 'Pause background video';
    };
    const play = () => {
        video.muted = true;
        video.play().catch(updateLabel);
    };
    const applyPreference = () => {
        if (preference.matches) video.pause();
        else play();
        updateLabel();
    };

    button.addEventListener('click', () => {
        if (video.paused) play();
        else video.pause();
    });
    video.addEventListener('play', updateLabel);
    video.addEventListener('pause', updateLabel);
    video.addEventListener('error', () => {
        button.textContent = 'Background video unavailable';
        button.disabled = true;
    });
    preference.addEventListener('change', applyPreference);
    applyPreference();
}
