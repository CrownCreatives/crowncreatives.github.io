/* ------------------------------------------------------------
   MAGIC.JS — AUTOSCAN • FLOATERS • LIGHTBOX • PERFORMANCE (2026)
------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     0. HERO ENTRANCE FADE-IN
  ------------------------------------------------------------- */

  const heroEl = document.querySelector('.hero');
  if (heroEl) heroEl.classList.add('hero-enter');


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
     2. AUTOSCAN (GitHub API) + PRELOAD
  ------------------------------------------------------------- */

  function preloadImages(urls) {
    return Promise.all(
      urls.map(src => new Promise(resolve => {
        const img = new Image();
        img.onload = img.onerror = resolve;
        img.src = src;
      }))
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

      await preloadImages(images);
      return images;

    } catch (e) {
      console.error("Autoscan failed:", e);
      return [];
    }
  }


  /* ------------------------------------------------------------
     3. BUILD GALLERY + LIGHTBOX
  ------------------------------------------------------------- */

  function buildGalleryGrid(images) {
    const grid = document.querySelector(".gallery-grid");
    if (!grid) return;

    grid.innerHTML = "";

    images.forEach(src => {
      const btn = document.createElement("button");
      btn.className = "gallery-item";
      btn.type = "button";
      btn.setAttribute("data-src", src);

      const img = document.createElement("img");
      img.src = src;
      img.className = "magic-gallery-image";

      btn.appendChild(img);
      grid.appendChild(btn);
    });

    attachLightboxHandlers();
  }

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
        overlayImg.src = item.getAttribute("data-src");
        overlay.classList.add("visible");
      });
    });
  }


  /* ------------------------------------------------------------
     4. SUPER‑NARROW MIDLINE LANE CALCULATION (Corrected)
  ------------------------------------------------------------- */

  function getLanePositions() {
    const crownEl = document.querySelector('.hero-crown-wrapper');
    if (!crownEl) return { leftLane: "45%", rightLane: "55%" };

    const rect = crownEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const isMobile = viewportWidth < 768;
    const imageWidth = isMobile ? 70 : 100;
    const safeGap = isMobile ? 12 : 20;

    const mid = viewportWidth / 2;

    const leftLane = mid - rect.width / 2 - imageWidth - safeGap;
    const rightLane = mid + rect.width / 2 + safeGap;

    return {
      leftLane: `${Math.max(leftLane, 20)}px`,
      rightLane: `${Math.min(rightLane, viewportWidth - imageWidth - 20)}px`
    };
  }


  /* ------------------------------------------------------------
     5. FLOATING IMAGES — ONE AT A TIME, 10s HOLD
  ------------------------------------------------------------- */

  const container = document.querySelector(".hero-side-gallery");
  let sources = [];
  let side = "left";
  let isImageActive = false;

  function spawnSideImage() {
    if (!sources.length || !container) return;
    if (isImageActive) return;

    isImageActive = true;

    const { leftLane, rightLane } = getLanePositions();

    const img = document.createElement("img");
    img.className = "side-gallery-float";

    img.src = sources[Math.floor(Math.random() * sources.length)];

    const isLeft = side === "left";
    side = isLeft ? "right" : "left";

    img.style.left = isLeft ? leftLane : rightLane;

    const isMobile = window.innerWidth < 768;
    const maxVertical = isMobile ? 20 : 40;
    const baseOffset = isMobile ? 10 : 20;
    img.style.top = `${Math.floor(Math.random() * maxVertical) + baseOffset}px`;

    container.appendChild(img);

    requestAnimationFrame(() => img.classList.add("visible"));

    setTimeout(() => {
      img.classList.remove("visible");

      setTimeout(() => {
        img.remove();
        isImageActive = false;
      }, 2000);

    }, 10000);
  }


  /* ------------------------------------------------------------
     6. FLOAT LOOP — NEXT IMAGE WAITS FOR PREVIOUS TO END
  ------------------------------------------------------------- */

  function startFloatLoop() {
    function loop() {
      spawnSideImage();
      setTimeout(loop, 12000);
    }
    loop();
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


/* ------------------------------------------------------------
   8. SCROLL-REACTIVE MIST (Corrected)
------------------------------------------------------------- */

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const scrollY = window.scrollY;
  const offset = Math.min(scrollY * 0.15, 40);

  hero.style.setProperty("--mist-offset", `${offset}px`);
});


/* ------------------------------------------------------------
   9. PARALLAX TILT (Corrected)
------------------------------------------------------------- */

document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;

  const tiltWrapper = document.querySelector(".hero-magic-backlayer");

  if (tiltWrapper) {
    tiltWrapper.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  }
});
