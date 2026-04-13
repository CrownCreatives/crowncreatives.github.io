/* ------------------------------------------------------------
   MAGIC.JS — TRUE AUTOSCAN + DYNAMIC LANES (2026)
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

      const images = files
        .filter(f => f.type === "file")
        .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name))
        .map(f => "/" + f.path.replace(/^\//, ""));

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

    grid.innerHTML = "";

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "magic-gallery-image";
      img.alt = "Artwork";
      grid.appendChild(img);
    });
  }

  /* ------------------------------------------------------------
     4. DYNAMIC CROWN‑RELATIVE LANE CALCULATION
  ------------------------------------------------------------- */

  function getLanePositions() {
    const crownEl = document.querySelector('.hero-crown-wrapper');
    if (!crownEl) return { leftLane: "10%", rightLane: "90%" };

    const rect = crownEl.getBoundingClientRect();
    const imageWidth = 240;
    const padding = 20;
    const viewportWidth = window.innerWidth;

    let leftLane = rect.left - imageWidth - padding;
    let rightLane = rect.right + padding;

    if (leftLane < 0) leftLane = 0;
    if (rightLane + imageWidth > viewportWidth)
      rightLane = viewportWidth - imageWidth;

    return {
      leftLane: `${leftLane}px`,
      rightLane: `${rightLane}px`
    };
  }

  /* ------------------------------------------------------------
     5. HERO FLOATING IMAGES — PERFECTLY CENTERED LANES
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  let sources = [];
  let side = "left";

  function spawnSideImage() {
    if (!sources.length || !container) return;

    const { leftLane, rightLane } = getLanePositions();

    const img = document.createElement("img");
    img.className = "side-gallery-float";

    const src = sources[Math.floor(Math.random() * sources.length)];
    img.src = src;

    const isLeft = side === "left";
    side = isLeft ? "right" : "left";

    img.style.left = isLeft ? leftLane : rightLane;
    img.style.top = `${Math.floor(Math.random() * 80) + 20}px`;

    container.appendChild(img);

    setTimeout(() => img.classList.add("visible"), 50);

    setTimeout(() => {
      img.classList.remove("visible");
      setTimeout(() => img.remove(), 2000);
    }, 15000);
  }

  /* ------------------------------------------------------------
     6. START EVERYTHING
  ------------------------------------------------------------- */

  loadFolderImages().then(images => {
    if (!images.length) {
      console.warn("No images found in folder.");
      return;
    }

    buildGalleryGrid(images);

    sources = images;

    spawnSideImage();
    setInterval(spawnSideImage, 18000);
  });

});
