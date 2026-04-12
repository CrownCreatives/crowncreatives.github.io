document.addEventListener('DOMContentLoaded', () => {

  const themeOrb = document.querySelector('.theme-toggle');
  const body = document.body;

  if (!themeOrb) return; // prevents console errors

  const savedTheme = localStorage.getItem('cc-theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  themeOrb.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    localStorage.setItem('cc-theme', isLight ? 'light' : 'dark');
  });

});
