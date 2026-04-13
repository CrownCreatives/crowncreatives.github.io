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
    '/assets/images/illuminus-crown.png',
    '/assets/images/illuminus-crown.png'
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
     FLOATING SIDE-IMAGE MAGIC — FINAL VERSION
     (Auto-loads images from .gallery-lane)
  ---------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  if (!container) return;

  const laneImages = Array.from(
    document.querySelectorAll(".gallery-lane img")
  ).map(img => img.getAttribute("src"));

  const sources = laneImages.length ? laneImages : [];

  const leftPositions = ["-180px", "-200px", "-160px"];
  const rightPositions = ["180px", "200px", "160px"];
  let side = "left";

  function spawnSideImage() {
    if (!sources.length) return;

    const img = document.createElement("img");
    img.className = "side-gallery-float";

    const src = sources[Math.floor(Math.random() * sources.length)];
    img.src = src;

    const isLeft = side === "left";
    side = isLeft ? "right" : "left";

    img.style.left = isLeft
      ? leftPositions[Math.floor(Math.random() * leftPositions.length)]
      : rightPositions[Math.floor(Math.random() * rightPositions.length)];

    img.style.top = `${Math.floor(Math.random() * 80) + 20}px`;

    container.appendChild(img);

    setTimeout(() => img.classList.add("visible"), 50);

    setTimeout(() => {
      img.classList.remove("visible");
      setTimeout(() => img.remove(), 2000);
    }, 15000);
  }

  spawnSideImage();
  setInterval(spawnSideImage, 18000);

});
