// ============================================================
//  Crown Creatives — Theme Toggle with 8s Magical Transition
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-icon");

  if (!toggle || !icon) return;

  // ------------------------------------------------------------
  // Apply saved theme on load
  // ------------------------------------------------------------
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  } else {
    root.setAttribute("data-theme", "light");
  }

  // ------------------------------------------------------------
  // Apply global 8-second transition
  // ------------------------------------------------------------
  function applyThemeTransition() {
    root.style.transition =
      "background 8s ease-in-out, color 8s ease-in-out, filter 8s ease-in-out";
  }

  // Apply transition AFTER load to avoid flash
  setTimeout(applyThemeTransition, 50);

  // ------------------------------------------------------------
  // Update icon based on theme
  // ------------------------------------------------------------
  function updateIcon(theme) {
    if (theme === "dark") {
      icon.src = "/assets/icons/moon.svg";
    } else {
      icon.src = "/assets/icons/sun.svg";
    }
  }

  updateIcon(root.getAttribute("data-theme"));

  // ------------------------------------------------------------
  // Toggle theme on click
  // ------------------------------------------------------------
  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    // Set new theme
    root.setAttribute("data-theme", next);

    // Save preference
    localStorage.setItem("theme", next);

    // Update icon
    updateIcon(next);

    // Reapply transition (ensures smooth fade every toggle)
    applyThemeTransition();
  });
});
