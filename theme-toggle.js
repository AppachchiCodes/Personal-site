const toggle = document.getElementById('themeToggle');
const toggleBg = document.getElementById('toggleBg');
const sunRays = document.getElementById('sunRays');
const moon = document.getElementById('moon');

let darkMode = true;

toggle.addEventListener('click', () => {
  darkMode = !darkMode;

  if(!darkMode) {
    // Switch to Sun Theme
    document.documentElement.style.setProperty('--navy', '#c0e3d6ff'); // off-white background
    document.documentElement.style.setProperty('--light-navy', getComputedStyle(document.documentElement).getPropertyValue('--sun-light-navy'));
    document.documentElement.style.setProperty('--lightest-navy', getComputedStyle(document.documentElement).getPropertyValue('--sun-lightest-navy'));
    document.documentElement.style.setProperty('--slate', getComputedStyle(document.documentElement).getPropertyValue('--sun-slate'));
    document.documentElement.style.setProperty('--light-slate', getComputedStyle(document.documentElement).getPropertyValue('--sun-light-slate'));
    document.documentElement.style.setProperty('--lightest-slate', getComputedStyle(document.documentElement).getPropertyValue('--sun-lightest-slate'));
    document.documentElement.style.setProperty('--white', getComputedStyle(document.documentElement).getPropertyValue('--sun-white'));
    document.documentElement.style.setProperty('--green', getComputedStyle(document.documentElement).getPropertyValue('--sun-green'));
    document.documentElement.style.setProperty('--green-bright', getComputedStyle(document.documentElement).getPropertyValue('--sun-green-bright'));

    // Set sun-mode readable colors
    document.documentElement.style.setProperty('--subtitle-color', '#333333');    // header p
    document.documentElement.style.setProperty('--heading-color', getComputedStyle(document.documentElement).getPropertyValue('--sun-heading-color'));
    document.documentElement.style.setProperty('--card-title-color', '#2a2a2a');  // project card title
    document.documentElement.style.setProperty('--card-desc-color', '#222220ff');   // project card description
    document.documentElement.style.setProperty('--footer-text-color', '#333333'); // footer

    // Toggle button animation
    toggleBg.setAttribute('fill', '#FFD95D'); // mustard
    sunRays.style.opacity = 1;
    moon.style.opacity = 0;

  } else {
    // Switch back to Dark Theme
    document.documentElement.style.setProperty('--navy', '#0a192f');
    document.documentElement.style.setProperty('--light-navy', '#112240');
    document.documentElement.style.setProperty('--lightest-navy', '#233554');
    document.documentElement.style.setProperty('--slate', '#8892b0');
    document.documentElement.style.setProperty('--light-slate', '#a8b2d1');
    document.documentElement.style.setProperty('--lightest-slate', '#ccd6f6');
    document.documentElement.style.setProperty('--white', '#e6f1ff');
    document.documentElement.style.setProperty('--green', '#64ffda');
    document.documentElement.style.setProperty('--green-bright', '#00ff99');

    // Reset to dark-mode colors
    document.documentElement.style.setProperty('--subtitle-color', '#a8b2d1');    // header p
    document.documentElement.style.setProperty('--heading-color', '#e6f1ff');     // h2
    document.documentElement.style.setProperty('--card-title-color', '#e6f1ff');  // project card title
    document.documentElement.style.setProperty('--card-desc-color', '#8892b0');   // project card description
    document.documentElement.style.setProperty('--footer-text-color', '#a8b2d1'); // footer

    toggleBg.setAttribute('fill', '#64ffda'); // original green
    sunRays.style.opacity = 0;
    moon.style.opacity = 1;
  }
});