document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  // Show button after scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    } else {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    }
  });

  // Smooth scroll to top
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
