document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  const body = document.body;
  const saved = localStorage.getItem("cc-theme");

  if (saved === "light") {
    body.classList.add("light-mode");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const mode = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("cc-theme", mode);
  });
});
