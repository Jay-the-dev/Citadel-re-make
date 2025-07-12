const carousel = document.getElementById('carousel');
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = true;

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        // Pause the carousel
        carousel.classList.add('paused');
        playPauseBtn.textContent = '▶️ Play';
        isPlaying = false;
    } else {
        // Play the carousel
        carousel.classList.remove('paused');
        playPauseBtn.textContent = '⏸️ Pause';
        isPlaying = true;
    }
});

// Spacebar to toggle play/pause
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        playPauseBtn.click();
    }
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
