// ============================================================
//  Crown Creatives — Fade Sections on Scroll
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-section").forEach(section => {
    observer.observe(section);
  });
});
