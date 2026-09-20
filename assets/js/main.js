const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const progress = document.querySelector('.page-progress span');
const header = document.querySelector('[data-header]');
const navLinks = [...document.querySelectorAll('[data-nav-link]')];
const sections = [...document.querySelectorAll('[data-section]')];

themeToggle?.addEventListener('click', () => {
  const currentTheme = root.dataset.theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 55}ms`);
  revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => sectionObserver.observe(section));

const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const ratio = scrollable > 0 ? scrollY / scrollable : 0;
  if (progress) progress.style.transform = `scaleX(${ratio})`;
  if (header) header.classList.toggle('is-scrolled', scrollY > 8);
};

addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();
