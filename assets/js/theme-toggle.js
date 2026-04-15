document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const icon = toggle?.querySelector(".theme-icon");

  if (!toggle || !icon) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("cc-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  icon.src = savedTheme === "dark"
    ? "/assets/icons/moon.svg"
    : "/assets/icons/sun.svg";

  // Toggle theme
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    // 8-second animated transition
    document.documentElement.style.transition = "background 8s ease, filter 8s ease";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("cc-theme", next);

    icon.src = next === "dark"
      ? "/assets/icons/moon.svg"
      : "/assets/icons/sun.svg";
  });
});
