// Safe, GitHub-Pages-compatible hero gallery
async function loadHeroGallery() {
  const left = document.querySelector('.lane-left');
  const right = document.querySelector('.lane-right');

  // If the hero section isn't on this page, stop immediately
  if (!left || !right) return;

  try {
    const response = await fetch('/assets/images/gallery/gallery.json', { cache: "no-store" });

    // If JSON doesn't exist yet (first deploy), stop safely
    if (!response.ok) return;

    const data = await response.json();

    // Validate structure
    if (!data || !Array.isArray(data.images) || data.images.length === 0) return;

    const images = data.images;
    let index = 0;

    function cycle() {
      const img = images[index % images.length];
      const target = index % 2 === 0 ? left : right;

      // Only update if the element still exists
      if (!target) return;

      target.src = img;
      target.style.opacity = 1;

      setTimeout(() => {
        if (target) target.style.opacity = 0;
      }, 3000);

      index++;
    }

    cycle();
    setInterval(cycle, 4000);

  } catch (err) {
    console.warn('Hero gallery skipped (safe mode):', err);
  }
}

document.addEventListener('DOMContentLoaded', loadHeroGallery);
