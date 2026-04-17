// Load hero gallery images from gallery.json (GitHub Pages safe)
async function loadHeroGallery() {
  const left = document.querySelector('.lane-left');
  const right = document.querySelector('.lane-right');

  if (!left || !right) return;

  try {
    const response = await fetch('/assets/images/gallery/gallery.json');
    const data = await response.json();

    const images = data.images;
    if (!images || images.length === 0) return;

    let index = 0;

    function cycle() {
      const img = images[index % images.length];
      const target = index % 2 === 0 ? left : right;

      target.src = img;
      target.style.opacity = 1;

      setTimeout(() => {
        target.style.opacity = 0;
      }, 3000);

      index++;
    }

    cycle();
    setInterval(cycle, 4000);

  } catch (err) {
    console.error('Hero gallery error:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadHeroGallery);
