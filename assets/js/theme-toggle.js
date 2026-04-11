// ===============================
//  Crown Creatives Theme Toggle
//  Click the magical orb to switch
//  between Neon Dark Mode and
//  Pastel Light Mode.
// ===============================

// Select the orb
const themeOrb = document.querySelector('.theme-toggle-orb');

// Select the body
const body = document.body;

// Load saved theme (if any)
const savedTheme = localStorage.getItem('cc-theme');

if (savedTheme === 'light') {
  body.classList.add('light-mode');
}

// Toggle on click
themeOrb.addEventListener('click', () => {
  const isLight = body.classList.toggle('light-mode');

  // Save preference
  localStorage.setItem('cc-theme', isLight ? 'light' : 'dark');
});
