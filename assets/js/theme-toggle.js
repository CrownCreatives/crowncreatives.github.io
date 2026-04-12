// ===============================
//  Crown Creatives Theme Toggle
//  Click the magical orb to switch
//  between Dark Mode and Light Mode.
// ===============================

// Select the orb (updated class)
const themeOrb = document.querySelector('.theme-toggle');

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
