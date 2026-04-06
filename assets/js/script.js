/* ============================================================
   CROWN CREATIVES — FINAL SCRIPT.JS (MERGED + CLEANED)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------
     PAGE FADE-IN
  -------------------------------- */
  document.body.classList.add("fade-enter-active");


  /* -------------------------------
     BACK TO TOP BUTTON
  -------------------------------- */
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


  /* -------------------------------
     DARK MODE TOGGLE
     (CSS expects .dark-toggle)
  -------------------------------- */
  const toggle = document.querySelector(".dark-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save preference
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }


  /* -------------------------------
     AMBIENT PARTICLES
  -------------------------------- */
  const count = 40;

  function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");

    const size = 4 + Math.random() * 10;
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";

    const duration = 6 + Math.random() * 6;
    p.style.animationDuration = duration + "s";

    if (Math.random() < 0.2) p.classList.add("particle-twinkle");

    document.body.appendChild(p);

    p.addEventListener("animationend", () => {
      p.remove();
      createParticle();
    });
  }

  for (let i = 0; i < count; i++) createParticle();


  /* -------------------------------
     SCROLL FADE-IN
  -------------------------------- */
  const elements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));


  /* -------------------------------
     PARALLAX CROWN
  -------------------------------- */
  document.addEventListener("mousemove", (e) => {
    const crown = document.querySelector(".crown-wrapper");
    if (!crown) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    crown.style.transform = `translate(${x}px, ${y}px)`;
  });

});
