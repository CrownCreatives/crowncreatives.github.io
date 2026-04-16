/* ============================================================
   CROWN CREATIVES — HERO GALLERY LANES (FINAL PRODUCTION VERSION)
   - Alternating left/right lanes
   - Random images from /assets/images/gallery/
   - Smooth fade-in / fade-out
   - Works in day + night mode
   - No overlaps, no blocking, no console errors
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const leftLane = document.querySelector(".hero-gallery-lane.lane-left");
  const rightLane = document.querySelector(".hero-gallery-lane.lane-right");

  if (!leftLane || !rightLane) return;

  // ------------------------------------------------------------
  // 1. IMAGE SOURCE LIST (AUTO-SCAN READY)
  // ------------------------------------------------------------
  // If you add more images to /assets/images/gallery/, just list them here.
  const galleryImages = [
    "Face.jpeg",
    "Flower.jpeg",
    "Fly.jpeg"
  ];

  // Build full paths
  const fullPaths = galleryImages.map(img =>
    `/assets/images/gallery/${img}`
  );

  // ------------------------------------------------------------
  // 2. SPAWN FUNCTION (ONE IMAGE AT A TIME)
  // ------------------------------------------------------------
  function spawnImage(lane) {
    const img = document.createElement("img");
    img.src = fullPaths[Math.floor(Math.random() * fullPaths.length)];
    img.style.opacity = "0";

    // Random vertical offset for magical drift
    const offset = Math.floor(Math.random() * 40) - 20;
    img.style.top = `${offset}px`;

    lane.appendChild(img);

    // Fade in
    requestAnimationFrame(() => {
      img.style.opacity = "1";
    });

    // Fade out + remove
    setTimeout(() => {
      img.style.opacity = "0";
      setTimeout(() => img.remove(), 1800);
    }, 6000);
  }

  // ------------------------------------------------------------
  // 3. ALTERNATING LEFT/RIGHT LOGIC
  // ------------------------------------------------------------
  let toggleSide = true;

  function cycleLanes() {
    if (toggleSide) {
      spawnImage(leftLane);
    } else {
      spawnImage(rightLane);
    }
    toggleSide = !toggleSide;
  }

  // Start immediately
  cycleLanes();

  // Continue every 7 seconds
  setInterval(cycleLanes, 7000);
});
