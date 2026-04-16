/* ============================================================
   CROWN CREATIVES — FADE SECTIONS (FINAL PRODUCTION VERSION)
   Smoothly fades in any element with .fade-section when visible
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(".fade-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-visible");
        observer.unobserve(entry.target); // fade only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px"
  });

  sections.forEach(section => observer.observe(section));
});
