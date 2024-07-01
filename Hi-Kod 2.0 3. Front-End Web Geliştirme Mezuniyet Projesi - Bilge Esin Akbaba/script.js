// Menu Toggle
function menuToggle() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
}

// Scroll Reveal
ScrollReveal().reveal('.anime-left', {
    origin: 'left',
    distance: '300px',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.anime-right', {
    origin: 'right',
    distance: '300px',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.anime-top', {
    origin: 'top',
    distance: '300px',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.anime-bottom', {
    origin: 'bottom',
    distance: '300px',
    duration: 1000,
    reset: true
});
