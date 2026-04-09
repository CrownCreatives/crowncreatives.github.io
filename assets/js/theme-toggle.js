const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");

  if (document.body.classList.contains("theme-dark")) {
    toggle.textContent = "🌙";
  } else {
    toggle.textContent = "☀️";
  }
});
