document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen);
            mobileNav.style.display = isOpen ? 'flex' : 'none';
            toggle.setAttribute('aria-expanded', isOpen);
        });
    }

    const chips = document.querySelectorAll('.category-chip');
    
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Check if the chip is already active
            if (chip.classList.contains('active')) return;

            // Remove active state from all chips
            chips.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-pressed', 'false');
            });

            // Set active state for the clicked chip
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
        });
    });
});
