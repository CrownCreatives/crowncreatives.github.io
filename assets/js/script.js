document.addEventListener("DOMContentLoaded", () => {

  // Fade-in
  document.body.classList.add("fade-enter-active");

  // Back to top
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Dark mode
  const toggle = document.querySelector(".dark-mode-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Ambient particles
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
  
});

<script>
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
</script>

