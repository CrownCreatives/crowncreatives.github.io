document.addEventListener("DOMContentLoaded", () => {
    const sun = document.getElementById("theme-toggle-sun");
    const moon = document.getElementById("theme-toggle-moon");

    function setTheme(mode) {
        document.documentElement.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);

        sun.style.display = mode === "light" ? "none" : "block";
        moon.style.display = mode === "light" ? "block" : "none";
    }

    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    sun.addEventListener("click", () => setTheme("dark"));
    moon.addEventListener("click", () => setTheme("light"));
});
