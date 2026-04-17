document.addEventListener('DOMContentLoaded', () => {
    const scrollP = document.getElementById('scroll-p');
    const vortex = document.querySelector('.bg-vortex');

    // 1. Titan HUD Scroll Tracking
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / total) * 100;

        if (scrollP) scrollP.style.width = `${progress}%`;
    });

    // 2. Background Vortex Parallax
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        vortex.style.setProperty('--x', `${x}%`);
        vortex.style.setProperty('--y', `${y}%`);
    });

    // 3. Optimized Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    // 4. Horizontal Scroll Assistance
    const projectStrip = document.querySelector('.project-strip');
    if (projectStrip) {
        projectStrip.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                // translate vertical scroll to horizontal scroll
                projectStrip.scrollLeft += e.deltaY;
                // Only prevent default if we're not at the edges
                // Actually, let's keep it simple for better UX
            }
        });
    }
});
