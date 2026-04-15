document.addEventListener("DOMContentLoaded", () => {
  const dataEl = document.getElementById("gallery-data");
  const heroEl = document.getElementById("hero-gallery");
  if (!dataEl || !heroEl) return;

  let heroImages = [];
  try {
    heroImages = JSON.parse(dataEl.dataset.heroImages || "[]");
  } catch (e) {
    console.error("Hero images JSON parse error", e);
    return;
  }

  if (!heroImages.length) return;

  let index = 0;
  const DURATION = 15000;

  function showNextHero() {
    const src = heroImages[index];
    heroEl.style.backgroundImage = `url(${src})`;
    heroEl.classList.add("hero-fade-in");

    setTimeout(() => {
      heroEl.classList.remove("hero-fade-in");
      heroEl.classList.add("hero-fade-out");

      setTimeout(() => {
        heroEl.classList.remove("hero-fade-out");
        index = (index + 1) % heroImages.length;
        showNextHero();
      }, 1000);
    }, DURATION);
  }

  showNextHero();
});
