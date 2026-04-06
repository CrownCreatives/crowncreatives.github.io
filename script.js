/* ============================================================
   CROWN CREATIVES — Global Script
   Page fade • Dark mode • Particle engine • UI helpers
   ============================================================ */


/* ------------------------------------------------------------
   PAGE TRANSITION FADE-IN
------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-enter-active");
});


/* ------------------------------------------------------------
   DARK MODE TOGGLE
------------------------------------------------------------ */
const darkToggle = document.querySelector(".dark-mode-toggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}


/* ------------------------------------------------------------
   BACK TO TOP BUTTON
------------------------------------------------------------ */
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ============================================================
   ADVANCED AMBIENT PARTICLE ENGINE
   Emerald-reactive • Dark-mode aware • Morph-intensifying
============================================================ */

(function ambientParticles() {

  /* CONFIG -------------------------------------------------- */
  let baseCount = 40;          // normal particle count
  let morphBoost = 30;         // extra particles during emerald morph
  let darkModeBoost = 20;      // extra particles in dark mode
  let windStrength = 15;       // px horizontal drift

  /* STATE --------------------------------------------------- */
  let isDarkMode = document.body.classList.contains("dark-mode");
  let isMorphing = false;

  /* PARTICLE SPAWNER ---------------------------------------- */
  function spawnParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");

    /* Random size variation */
    const size = 2 + Math.random() * 6; // 2–8px
    p.style.width = size + "px";
    p.style.height = size + "px";

    /* Random position */
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";

    /* Random animation duration + delay */
    const duration = 6 + Math.random() * 6; // 6–12s
    const delay = Math.random() * 6;
    p.style.animationDuration = duration + "s";
    p.style.animationDelay = delay + "s";

    /* Occasional bright twinkle */
    if (Math.random() < 0.08) {
      p.style.boxShadow = "0 0 12px var(--emerald-soft)";
      p.style.opacity = "0.9";
    }

    /* Directional wind drift */
    p.style.setProperty("--wind", windStrength + "px");

    /* Dark mode reaction */
    if (isDarkMode) {
      p.style.background = "var(--emerald-soft)";
      p.style.opacity = "0.6";
    }

    document.body.appendChild(p);

    /* Respawn when animation ends */
    p.addEventListener("animationend", () => {
      p.remove();
      spawnParticle();
    });
  }

  /* INITIAL SPAWN ------------------------------------------ */
  function spawnInitialParticles() {
    let total = baseCount;

    if (isDarkMode) total += darkModeBoost;
    if (isMorphing) total += morphBoost;

    for (let i = 0; i < total; i++) {
      spawnParticle();
    }
  }

  spawnInitialParticles();

  /* DARK MODE LISTENER -------------------------------------- */
  const observer = new MutationObserver(() => {
    const nowDark = document.body.classList.contains("dark-mode");
    if (nowDark !== isDarkMode) {
      isDarkMode = nowDark;
      spawnInitialParticles();
    }
  });

  observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

  /* EMERALD MORPH INTENSITY --------------------------------- */
  const darkLogo = document.querySelector(".dark-logo");
  if (darkLogo) {
    darkLogo.addEventListener("transitionstart", () => {
      isMorphing = true;
      spawnInitialParticles();
    });

    darkLogo.addEventListener("transitionend", () => {
      isMorphing = false;
    });
  }

})();
