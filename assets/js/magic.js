/* ------------------------------------------------------------
   MAGIC.JS — FINAL AUTO‑SCAN VERSION (2026)
------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     HERO CROWN IMAGE SWAP (EVERY 15 SECONDS)
  ------------------------------------------------------------- */

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

  /* ------------------------------------------------------------
     AUTO‑SCAN GALLERY PAGE FOR IMAGES
     (Loads ANY image from /gallery/ automatically)
  ------------------------------------------------------------- */

  async function loadGalleryImages() {
    try {
      const response = await fetch("/gallery/");
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Supports both .magic-gallery-image and .gallery img
      const imgs = Array.from(
        doc.querySelectorAll(".magic-gallery-image, .gallery img")
      );

      return imgs.map(img => img.src);
    } catch (e) {
      console.error("Gallery scan failed:", e);
      return [];
    }
  }

  /* ------------------------------------------------------------
     FLOATING SIDE‑IMAGE MAGIC — AUTO‑SCAN VERSION
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  if (!container) return;

  let sources = [];

  const leftPositions = ["-180px", "-200px", "-160px"];
  const rightPositions = ["340px", "380px", "420px"]; // tuned for visibility
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

  /* ------------------------------------------------------------
     START MAGIC AFTER GALLERY IMAGES ARE LOADED
  ------------------------------------------------------------- */

  loadGalleryImages().then(imgs => {
    sources = imgs;

    if (!sources.length) {
      console.warn("No gallery images found for hero animation.");
      return;
    }

    spawnSideImage();
    setInterval(spawnSideImage, 18000);
  });

});
