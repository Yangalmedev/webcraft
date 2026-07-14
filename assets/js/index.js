
// Ensure elements are rendered before JS runs
document.addEventListener('DOMContentLoaded', () => {
  
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  const chips = document.querySelectorAll('.category-chip');
  
  if (chips.length > 0) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        // Reset all chips
        chips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        // Activate clicked chip
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
      });
    });
  }

});

