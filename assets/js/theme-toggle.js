/* ============================================================
   THEME TOGGLE — Light / Dark with 10s Fade-to-Dark
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const toggleButton = document.querySelector(".theme-toggle");
  const sunIcon = document.querySelector(".theme-icon-sun");
  const moonIcon = document.querySelector(".theme-icon-moon");

  /* ------------------------------------------------------------
     1. Load saved theme (if any)
  ------------------------------------------------------------ */
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    sunIcon.classList.remove("active");
    moonIcon.classList.add("active");
  }

  /* ------------------------------------------------------------
     2. Toggle theme instantly on click
  ------------------------------------------------------------ */
  toggleButton.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";

    if (isDark) {
      root.removeAttribute("data-theme");
      sunIcon.classList.add("active");
      moonIcon.classList.remove("active");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      sunIcon.classList.remove("active");
      moonIcon.classList.add("active");
      localStorage.setItem("theme", "dark");
    }
  });

  /* ------------------------------------------------------------
     3. Automatic 10-second fade to dark mode
        (Only if user has not chosen a theme)
  ------------------------------------------------------------ */
  if (!savedTheme) {
    setTimeout(() => {
      root.setAttribute("data-theme", "dark");
      sunIcon.classList.remove("active");
      moonIcon.classList.add("active");
      localStorage.setItem("theme", "dark");
    }, 10000);
  }

});
