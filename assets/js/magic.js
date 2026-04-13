/* ---------------------------------------------
   MAGIC.JS — FINAL FULLY WORKING VERSION
---------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------
     HERO CROWN IMAGE SWAP (EVERY 15 SECONDS)
  ---------------------------------------------- */

  const crown = document.querySelector('.hero-crown-cinematic');
  const crownImages = [
    '/assets/images/illuminus-crown.png',
    '/assets/images/illuminus-crown.png', // duplicate for subtle swap
    '/assets/images/illuminus-crown.png'  // keeps animation smooth
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
     FLOATING SIDE-IMAGE MAGIC — FIXED VERSION
     (Random image, left/right, fade in/out)
  ---------------------------------------------- */

  const galleryFiles = [
    "Face.jpeg",
    "Flower.jpeg",
    "Fly.jpeg"
  ];

  const leftPositions = ["-180px", "-200px", "-160px"];
  const rightPositions = ["180px", "200px", "160px"];

  let side = "left";

  function spawnSideImage() {
    const container = document.querySelector(".hero-side-gallery");
    if (!container) return;

    const img = document.createElement("img");
    img.className = "side-gallery-float";

    // Pick a random image
    const file = galleryFiles[Math.floor(Math.random() * galleryFiles.length)];
    img.src = `/assets/images/gallery/${file}`;

    // Alternate left/right
    const isLeft = side === "left";
    side = isLeft ? "right" : "left";

    img.style.left = isLeft
      ? leftPositions[Math.floor(Math.random() * leftPositions.length)]
      : rightPositions[Math.floor(Math.random() * rightPositions.length)];

    // Random vertical offset
    img.style.top = `${Math.floor(Math.random() * 80) + 20}px`;

    container.appendChild(img);

    // Fade in
    setTimeout(() => img.classList.add("visible"), 50);

    // Fade out + remove
    setTimeout(() => {
      img.classList.remove("visible");
      setTimeout(() => img.remove(), 2000);
    }, 15000); // stays for 15 seconds
  }

  // Run every 18 seconds
  spawnSideImage();
  setInterval(spawnSideImage, 18000);

});
