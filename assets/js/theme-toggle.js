/* ============================================================
   THEME TOGGLE SCRIPT
   30% larger toggle + 5s magical fade + persistent theme
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const toggleButton = document.getElementById("themeToggle");
  const root = document.documentElement;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    updateIcons(savedTheme);
  }

  // Toggle theme on click
  toggleButton.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Apply theme
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update icons
    updateIcons(newTheme);

    // Add shimmer pulse to crowns
    document.body.classList.add("page-transition-pulse");
    setTimeout(() => {
      document.body.classList.remove("page-transition-pulse");
    }, 1400);
  });

  // Swap sun/moon icons
  function updateIcons(theme) {
    const sun = document.querySelector(".theme-icon-light");
    const moon = document.querySelector(".theme-icon-dark");

    if (theme === "light") {
      sun.classList.add("active");
      moon.classList.remove("active");
    } else {
      sun.classList.remove("active");
      moon.classList.add("active");
    }
  }

});
