// Menggunakan ScrollReveal dengan gerakan yang lebih "lambat" agar terkesan premium
const sr = ScrollReveal({
    duration: 1500,
    distance: '50px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false // Biar terasa lebih organik
});

sr.reveal('.reveal', { origin: 'bottom' });
sr.reveal('.section-label', { origin: 'left', delay: 200 });
sr.reveal('.content', { origin: 'bottom', delay: 400 });
sr.reveal('.stat-item', { interval: 200 });

// Efek scroll sederhana untuk navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    } else {
        nav.style.boxShadow = "none";
    }
});