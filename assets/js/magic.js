/* ------------------------------------------------------------
   MAGIC.JS — AUTOSCAN • FLOATERS • LIGHTBOX • PERFORMANCE (2026)
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

      await preloadImages(images); // eliminate pop‑in

      return images;

    } catch (e) {
      console.error("Folder autoscan failed:", e);
      return [];
    }
  }


  /* ------------------------------------------------------------
     3. BUILD GALLERY PAGE + LIGHTBOX
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
     4. DYNAMIC CROWN‑RELATIVE LANE CALCULATION (SUPER NARROW)
  ------------------------------------------------------------- */

  function getLanePositions() {
    const crownEl = document.querySelector('.hero-crown-wrapper');
    if (!crownEl) return { leftLane: "10%", rightLane: "90%" };

    const rect = crownEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // EXTREMELY tight lanes
    const isMobile = viewportWidth < 768;
    const imageWidth = isMobile ? 90 : 120;   // smaller images
    const laneOffset = isMobile ? 4 : 8;      // VERY close to crown

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
     5. HERO FLOATING IMAGES — ONE AT A TIME, 10s HOLD
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  let sources = [];
  let side = "left";
  let isImageActive = false;   // ensures only ONE image at a time

  function spawnSideImage() {
    if (!sources.length || !container) return;
    if (isImageActive) return;   // prevent overlap

    isImageActive = true;

    const { leftLane, rightLane } = getLanePositions();

    const img = document.createElement("img");
    img.className = "side-gallery-float";

    const src = sources[Math.floor(Math.random() * sources.length)];
    img.src = src;

    const isLeft = side === "left";
    side = isLeft ? "right" : "left";

    img.style.left = isLeft ? leftLane : rightLane;

    const isMobile = window.innerWidth < 768;
    const maxVertical = isMobile ? 40 : 60;
    const baseOffset = isMobile ? 10 : 20;
    img.style.top = `${Math.floor(Math.random() * maxVertical) + baseOffset}px`;

    container.appendChild(img);

    requestAnimationFrame(() => img.classList.add("visible"));

    // Hold for EXACTLY 10 seconds
    setTimeout(() => {
      img.classList.remove("visible");

      // Remove after fade-out
      setTimeout(() => {
        img.remove();
        isImageActive = false;   // allow next image
      }, 2000);

    }, 10000);
  }


  /* ------------------------------------------------------------
     6. FLOAT LOOP — NEXT IMAGE WAITS FOR PREVIOUS TO END
  ------------------------------------------------------------- */

  function startFloatLoop() {
    function loop() {
      spawnSideImage();
      setTimeout(loop, 12000); // 10s hold + 2s fade-out
    }
    loop();
  }


  /* ------------------------------------------------------------
     7. SIMPLE GALLERY LIGHTBOX
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
     8. INITIALISE AUTOSCAN + HERO FLOATERS
  ------------------------------------------------------------- */

  loadFolderImages().then(imgs => {
    sources = imgs;

    buildGalleryGrid(imgs);

    if (container && sources.length) {
      startFloatLoop();
    }
  });

});
