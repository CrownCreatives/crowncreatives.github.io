/* ------------------------------------------------------------
   MAGIC.JS — FINAL AUTO‑SCAN VERSION (2026)
------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     HERO CROWN — NO MORE BLINKING
     (We keep shimmer, remove fade-out)
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

      // Magical shimmer cover instead of fade-out blink
      crown.classList.add("fade-swap");

      setTimeout(() => {
        crown.src = crownImages[crownIndex];
        crown.classList.remove("fade-swap");
      }, 600);

    }, 15000);
  }

  /* ------------------------------------------------------------
     AUTO‑SCAN GALLERY.HTML FOR IMAGES
  ------------------------------------------------------------- */

  async function loadGalleryImages() {
    try {
      const response = await fetch("/gallery.html");
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

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
     FLOATING SIDE‑IMAGE MAGIC — 240PX + CLOSER TO CROWN
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  if (!container) return;

  let sources = [];

  // Closer to crown — tuned for 240px images
  const leftPositions = ["-240px", "-260px", "-280px"];
  const rightPositions = ["240px", "260px", "280px"];

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
     START MAGIC AFTER IMAGES LOAD
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
