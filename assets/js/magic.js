/* ---------------------------------------------
   MAGIC.JS — FINAL FULLY WORKING VERSION
---------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------
     HERO CROWN IMAGE SWAP (EVERY 15 SECONDS)
  ---------------------------------------------- */

  const crown = document.querySelector('.hero-crown img');
  const crownImages = [
    '/assets/images/crown1.png',
    '/assets/images/crown2.png',
    '/assets/images/crown3.png'
  ];

  let crownIndex = 0;

  if (crown) {
    setInterval(() => {
      crownIndex = (crownIndex + 1) % crownImages.length;
      crown.style.opacity = 0;

      setTimeout(() => {
        crown.src = crownImages[crownIndex];
        crown.style.opacity = 1;
      }, 800);
    }, 15000);
  }

  /* ---------------------------------------------
     FLOATING SIDE-IMAGE MAGIC — FULL VERSION
  ---------------------------------------------- */

  const galleryImages = document.querySelectorAll('.magic-gallery-image');
  let galleryIndex = 0;

function randomY() {
  return Math.floor(Math.random() * 100) + 20; 
}

  function cycleGallery() {
    // Hide all images first
    galleryImages.forEach(img => {
      img.style.opacity = 0;
      img.classList.remove('sparkle');
    });

    const img = galleryImages[galleryIndex];

    // Random left or right placement
    if (Math.random() > 0.5) {
      img.classList.add('magic-left');
      img.classList.remove('magic-right');
    } else {
      img.classList.add('magic-right');
      img.classList.remove('magic-left');
    }

    // Random vertical position
    img.style.top = randomY() + "px";

    // Fade in
    img.style.opacity = 1;

    // Add sparkle pulse
    img.classList.add('sparkle');

    // Move to next image
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
  }

  if (galleryImages.length > 0) {
    cycleGallery();
    setInterval(cycleGallery, 5000);
  }

});
