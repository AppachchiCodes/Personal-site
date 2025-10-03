// theme-toggle.js
const toggle = document.getElementById('themeToggle');
const toggleBg = document.getElementById('toggleBg');
const sunRays = document.getElementById('sunRays');
const moon = document.getElementById('moon');

// Check for saved theme preference or default to dark
let darkMode = localStorage.getItem('darkMode') === null ? true : localStorage.getItem('darkMode') === 'true';

// Apply theme on load
applyTheme(darkMode);

toggle.addEventListener('click', () => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  applyTheme(darkMode);
  
  // Update fractal tree color if the function exists
  if (typeof updateTreeColor === 'function') {
    updateTreeColor();
  }
});

function applyTheme(isDark) {
  const root = document.documentElement;
  
  if (!isDark) {
    // Sun Theme
    root.classList.add('sun-theme');
    toggleBg.setAttribute('fill', '#0a192f');
    sunRays.style.opacity = '0';
    sunRays.style.transform = 'rotate(45deg)';
    moon.style.opacity = '1';
  } else {
    // Dark Theme
    root.classList.remove('sun-theme');
    toggleBg.setAttribute('fill', '#FFD95D');
    sunRays.style.opacity = '1';
    sunRays.style.transform = 'rotate(0deg)';
    moon.style.opacity = '0';
  }
}