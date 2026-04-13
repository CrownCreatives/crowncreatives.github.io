/* ------------------------------------------------------------
   MAGIC.JS — TRUE FOLDER AUTOSCAN (2026)
------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     1. HERO CROWN — SHIMMER SWAP (NO BLINK)
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
      crown.classList.add("fade-swap");

      setTimeout(() => {
        crown.src = crownImages[crownIndex];
        crown.classList.remove("fade-swap");
      }, 600);

    }, 15000);
  }

  /* ------------------------------------------------------------
     2. TRUE FOLDER AUTOSCAN (GitHub API)
  ------------------------------------------------------------- */

  async function loadFolderImages() {
    try {
      const response = await fetch(
        "https://api.github.com/repos/CrownCreatives/crowncreatives.github.io/contents/assets/images/gallery"
      );

      const files = await response.json();

      // Filter only image files
      const images = files
        .filter(f => f.type === "file")
        .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name))
        .map(f => f.path.startsWith("/") ? f.path : "/" + f.path);

      return images;

    } catch (e) {
      console.error("Folder autoscan failed:", e);
      return [];
    }
  }

  /* ------------------------------------------------------------
     3. BUILD GALLERY PAGE AUTOMATICALLY
  ------------------------------------------------------------- */

  function buildGalleryGrid(images) {
    const grid = document.querySelector(".gallery-grid");
    if (!grid) return;

    grid.innerHTML = ""; // clear existing

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = "/" + src.replace(/^\//, "");
      img.className = "magic-gallery-image";
      img.alt = "Artwork";
      grid.appendChild(img);
    });
  }

  /* ------------------------------------------------------------
     4. HERO FLOATING IMAGES — RESPONSIVE LANES
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  let sources = [];

  const leftPositions = ["10%", "12%", "14%"];
  const rightPositions = ["86%", "88%", "90%"];
  let side = "left";

  function spawnSideImage() {
    if (!sources.length || !container) return;

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
     5. START EVERYTHING
  ------------------------------------------------------------- */

  loadFolderImages().then(images => {
    if (!images.length) {
      console.warn("No images found in folder.");
      return;
    }

    // Build gallery page
    buildGalleryGrid(images);

    // Feed hero
    sources = images.map(src => "/" + src.replace(/^\//, ""));

    spawnSideImage();
    setInterval(spawnSideImage, 18000);
  });

});
