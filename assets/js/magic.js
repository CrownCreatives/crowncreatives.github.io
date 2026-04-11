/* ---------------------------------------------
   MAGIC.JS — FIXED + FULLY WORKING VERSION
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
     GALLERY FADE-IN/OUT MAGIC
  ---------------------------------------------- */

  const galleryImages = document.querySelectorAll('.magic-gallery-image');
  let galleryIndex = 0;

  function cycleGallery() {
    galleryImages.forEach((img, i) => {
      img.style.opacity = i === galleryIndex ? 1 : 0;
    });

    galleryIndex = (galleryIndex + 1) % galleryImages.length;
  }

  if (galleryImages.length > 0) {
    cycleGallery();
    setInterval(cycleGallery, 6000);
  }

});

