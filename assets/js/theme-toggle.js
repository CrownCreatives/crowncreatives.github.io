// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");

    if (!toggle) return;

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-dark");
        document.body.classList.toggle("theme-light");
    });
});
