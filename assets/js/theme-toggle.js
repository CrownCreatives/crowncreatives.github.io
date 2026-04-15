// ===============================
//  Crown Creatives Theme Toggle
//  Day ↔ Night Mode Switch
//  Saves user preference
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const icon = toggle?.querySelector(".theme-icon");

  if (!toggle || !icon) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("cc-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.src = "/assets/icons/moon.svg";
  } else {
    document.body.classList.remove("dark-mode");
    icon.src = "/assets/icons/sun.svg";
  }

  // Toggle on click
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
      icon.src = "/assets/icons/moon.svg";
      localStorage.setItem("cc-theme", "dark");
    } else {
      icon.src = "/assets/icons/sun.svg";
      localStorage.setItem("cc-theme", "light");
    }
  });
});
