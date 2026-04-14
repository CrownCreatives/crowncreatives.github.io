/* ------------------------------------------------------------
   MAGIC.JS — AUTOSCAN • FLOATERS • LIGHTBOX (2026)
------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     0. HERO ENTRANCE FADE-IN
  ------------------------------------------------------------- */

  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.classList.add('hero-enter');
  }


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
     2. TRUE FOLDER AUTOSCAN (GitHub API) + PRELOAD
  ------------------------------------------------------------- */

  function preloadImages(urls) {
    return Promise.all(
      urls.map(
        src =>
          new Promise(resolve => {
            const img = new Image();
            img.onload = img.onerror = resolve;
            img.src = src;
          })
      )
    );
  }

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

      // Preload to avoid pop-in
      await preloadImages(images);

      return images;

    } catch (e) {
      console.error("Folder autoscan failed:", e);
      return [];
    }
  }


  /* ------------------------------------------------------------
     3. BUILD GALLERY PAGE AUTOMATICALLY + LIGHTBOX HOOKS
  ------------------------------------------------------------- */

  function buildGalleryGrid(images) {
    const grid = document.querySelector(".gallery-grid");
    if (!grid) return;

    grid.innerHTML = "";

    images.forEach(src => {
      const wrapper = document.createElement("button");
      wrapper.className = "gallery-item";
      wrapper.type = "button";
      wrapper.setAttribute("data-src", src);

      const img = document.createElement("img");
      img.src = src;
      img.className = "magic-gallery-image";
      img.alt = "Artwork";

      wrapper.appendChild(img);
      grid.appendChild(wrapper);
    });

    attachLightboxHandlers();
  }


  /* ------------------------------------------------------------
     4. DYNAMIC CROWN‑RELATIVE LANE CALCULATION (MOBILE-AWARE)
  ------------------------------------------------------------- */

  function getLanePositions() {
    const crownEl = document.querySelector('.hero-crown-wrapper');
    if (!crownEl) return { leftLane: "10%", rightLane: "90%" };

    const rect = crownEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Mobile: lanes closer + smaller images
    const isMobile = viewportWidth < 768;
    const imageWidth = isMobile ? 130 : 180;
    const laneOffset = isMobile ? 20 : 40;

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
     5. HERO FLOATING IMAGES — NARROW LANES + THROTTLED SPAWN
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  let sources = [];
  let side = "left";

  let lastSpawnTime = 0;
  const SPAWN_INTERVAL = 3500; // ms

  function spawnSideImage(timestamp = performance.now()) {
    if (!sources.length || !container) return;

    if (timestamp - lastSpawnTime < SPAWN_INTERVAL) return;
    lastSpawnTime = timestamp;

    const { leftLane, rightLane } = getLanePositions();

    const img = document.createElement("img");
    img.className = "side-gallery-float";

    const src = sources[Math.floor(Math.random() * sources.length)];
    img.src = src;

    const isLeft = side === "left";
    side = isLeft ? "right" : "left";

    img.style.left = isLeft ? leftLane : rightLane;

    const isMobile = window.innerWidth < 768;
    const maxVertical = isMobile ? 80 : 120;
    const baseOffset = isMobile ? 20 : 40;
    img.style.top = `${Math.floor(Math.random() * maxVertical) + baseOffset}px`;

    container.appendChild(img);

    requestAnimationFrame(() => img.classList.add("visible"));

    setTimeout(() => {
      img.classList.remove("visible");
      setTimeout(() => img.remove(), 2000);
    }, 12000);
  }

  function startFloatLoop() {
    function loop(timestamp) {
      spawnSideImage(timestamp);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }


  /* ------------------------------------------------------------
     6. SIMPLE GALLERY LIGHTBOX
  ------------------------------------------------------------- */

  function createLightbox() {
    let overlay = document.querySelector(".cc-lightbox-overlay");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.className = "cc-lightbox-overlay";

    const img = document.createElement("img");
    img.className = "cc-lightbox-image";
    overlay.appendChild(img);

    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
    });

    document.body.appendChild(overlay);
    return overlay;
  }

  function attachLightboxHandlers() {
    const items = document.querySelectorAll(".gallery-item");
    if (!items.length) return;

    const overlay = createLightbox();
    const overlayImg = overlay.querySelector(".cc-lightbox-image");

    items.forEach(item => {
      item.addEventListener("click", () => {
        const src = item.getAttribute("data-src");
        overlayImg.src = src;
        overlay.classList.add("visible");
      });
    });
  }


  /* ------------------------------------------------------------
     7. INITIALISE AUTOSCAN + HERO FLOATERS
  ------------------------------------------------------------- */

  loadFolderImages().then(imgs => {
    sources = imgs;

    buildGalleryGrid(imgs);

    if (container && sources.length) {
      startFloatLoop();
    }
  });

});
