// ============================================================
//  Crown Creatives — Magical Day/Night Toggle (Final Working)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const icon = toggle?.querySelector(".theme-icon");

  if (!toggle || !icon) return;

  // Load saved theme
  const saved = localStorage.getItem("cc-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);

  icon.src = saved === "dark"
    ? "/assets/icons/moon.svg"
    : "/assets/icons/sun.svg";

  // Toggle theme
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    // Apply 8-second transition to the WHOLE SITE
    document.documentElement.style.transition =
      "background 8s ease, color 8s ease, filter 8s ease";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("cc-theme", next);

    icon.src = next === "dark"
      ? "/assets/icons/moon.svg"
      : "/assets/icons/sun.svg";
  });
});
