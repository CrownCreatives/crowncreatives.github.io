// Auto-load all images from /assets/images/gallery/
async function loadHeroGallery() {
  const left = document.querySelector('.lane-left');
  const right = document.querySelector('.lane-right');

  if (!left || !right) return;

  try {
    const response = await fetch('/assets/images/gallery/');
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const links = [...doc.querySelectorAll('a')];
    const images = links
      .map(a => a.getAttribute('href'))
      .filter(href =>
        href.match(/\.(jpg|jpeg|png|webp)$/i)
      )
      .map(file => '/assets/images/gallery/' + file);

    if (images.length === 0) return;

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
    console.error('Gallery load error:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadHeroGallery);
