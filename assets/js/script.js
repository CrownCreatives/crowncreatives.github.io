// ============================================================
// CROWN CREATIVES — Ambient Emerald Engine
// Particles, dark mode, back-to-top, page fade, morph boost
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // Page fade-in
  // -----------------------------
  document.body.classList.add("fade-enter-active");

  // -----------------------------
  // Back to top
  // -----------------------------
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // -----------------------------
  // Dark mode toggle
  // -----------------------------
  const darkToggle = document.querySelector(".dark-mode-toggle");
  const root = document.documentElement;

  function applyDarkMode(isDark) {
    if (isDark) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }

  // Load preference
  const storedTheme = localStorage.getItem("cc-theme");
  if (storedTheme === "dark") applyDarkMode(true);

  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      const isDark = !root.classList.contains("dark-mode");
      applyDarkMode(isDark);
      localStorage.setItem("cc-theme", isDark ? "dark" : "light");
    });
  }

  // -----------------------------
  // Ambient particles
  // -----------------------------
  const particleCount = 40;

  function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");

    // Random size
    const size = 4 + Math.random() * 10; // 4–14px
    p.style.width = size + "px";
    p.style.height = size + "px";

    // Random position
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";

    // Random duration + delay
    const duration = 6 + Math.random() * 6; // 6–12s
    const delay = Math.random() * 6;
    p.style.animationDuration = duration + "s";
    p.style.animationDelay = delay + "s";

    // Occasional bright twinkle
    if (Math.random() < 0.2) {
      p.classList.add("particle-twinkle");
    }

    // Directional wind drift (randomized direction)
    if (Math.random() < 0.5) {
      p.classList.add("particle-drift-left");
    } else {
      p.classList.add("particle-drift-right");
    }

    // React to dark mode via CSS (using .dark-mode on :root)
    // No extra JS needed; CSS can style .dark-mode .particle

    document.body.appendChild(p);

    p.addEventListener("animationend", () => {
      p.remove();
      createParticle(); // respawn
    });
  }

  function spawnAmbientParticles() {
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
  }

  spawnAmbientParticles();

  // -----------------------------
  // Intensify particles during emerald morph
  // -----------------------------
  // Assumes you add/remove a class like .emerald-morph-active on <body>
  // via CSS animation or JS trigger if you want to sync it.
  const EMERALD_BOOST_CLASS = "emerald-boost";

  function setEmeraldBoost(active) {
    if (active) {
      document.body.classList.add(EMERALD_BOOST_CLASS);
    } else {
      document.body.classList.remove(EMERALD_BOOST_CLASS);
    }
  }

  // Example: pulse boost every 20s to match emerald morph cycle
  setInterval(() => {
    setEmeraldBoost(true);
    setTimeout(() => setEmeraldBoost(false), 4000); // 4s boost window
  }, 20000);
});
