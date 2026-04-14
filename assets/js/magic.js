/* ------------------------------------------------------------
   MAGIC.JS — TRUE AUTOSCAN + NARROW LANE FLOATERS (2026)
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
     4. DYNAMIC CROWN‑RELATIVE LANE CALCULATION (NARROW LANES)
  ------------------------------------------------------------- */

  function getLanePositions() {
    const crownEl = document.querySelector('.hero-crown-wrapper');
    if (!crownEl) return { leftLane: "10%", rightLane: "90%" };

    const rect = crownEl.getBoundingClientRect();
    const imageWidth = 180;
    const laneOffset = 40;
    const viewportWidth = window.innerWidth;

    let leftLane = rect.left - imageWidth - laneOffset;
    let rightLane = rect.right + laneOffset;

    if (leftLane < 10) leftLane = 10;
    if (rightLane + imageWidth > viewportWidth - 10)
      rightLane = viewportWidth - imageWidth - 10;

    return {
      leftLane: `${leftLane}px`,
      rightLane: `${rightLane}px`
    };
  }


  /* ------------------------------------------------------------
     5. HERO FLOATING IMAGES — NARROW LANES + ALTERNATING SIDES
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

    // Tighter vertical drift
    img.style.top = `${Math.floor(Math.random() * 120) + 40}px`;

    container.appendChild(img);

    // Fade in
    setTimeout(() => img.classList.add("visible"), 50);

    // Fade out + remove
    setTimeout(() => {
      img.classList.remove("visible");
      setTimeout(() => img.remove(), 2000);
    }, 12000);
  }


  /* ------------------------------------------------------------
     6. INITIALISE AUTOSCAN + HERO FLOATERS
  ------------------------------------------------------------- */

  loadFolderImages().then(imgs => {
    sources = imgs;

    // Build gallery page if present
    buildGalleryGrid(imgs);

    // Spawn floating images every 3.5 seconds
    setInterval(spawnSideImage, 3500);
  });

});
