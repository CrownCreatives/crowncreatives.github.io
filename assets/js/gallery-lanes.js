/* ============================================================
   CROWN CREATIVES — HERO GALLERY LANES (AUTO-SCAN VERSION)
   - Loads gallery.json dynamically
   - Alternates left/right lanes
   - Random image selection
   - Magical drift, glow, fade
   - Crown-safe + text-safe
============================================================ */

document.addEventListener("DOMContentLoaded", async () => {

  const leftLane = document.querySelector(".hero-gallery-lane.lane-left");
  const rightLane = document.querySelector(".hero-gallery-lane.lane-right");

  if (!leftLane || !rightLane) return;

  /* ------------------------------------------------------------
     1. LOAD IMAGE LIST FROM gallery.json
  ------------------------------------------------------------ */
  let images = [];

  try {
    const res = await fetch("/assets/images/gallery/gallery.json");
    images = await res.json();
  } catch (err) {
    console.error("Gallery JSON failed to load:", err);
    return;
  }

  if (!images.length) return;

  const fullPaths = images.map(img => `/assets/images/gallery/${img}`);

  /* ------------------------------------------------------------
     2. SAFE ZONE SETTINGS (NO OVERLAP WITH CROWN OR TEXT)
  ------------------------------------------------------------ */
  const SAFE_TOP = 40;     // minimum px from top of lane
  const SAFE_BOTTOM = 40;  // minimum px from bottom of lane

  /* ------------------------------------------------------------
     3. SPAWN A SINGLE IMAGE IN A LANE
  ------------------------------------------------------------ */
  function spawnImage(lane) {
    const img = document.createElement("img");
    img.src = fullPaths[Math.floor(Math.random() * fullPaths.length)];

    // Random vertical offset within safe zone
    const laneHeight = lane.offsetHeight;
    const maxOffset = laneHeight - SAFE_BOTTOM;
    const minOffset = SAFE_TOP;
    const offset = Math.floor(Math.random() * (maxOffset - minOffset)) + minOffset;

    img.style.top = `${offset}px`;
    img.style.opacity = "0";

    // Magical drift + rotation
    const rotation = (Math.random() * 6) - 3; // -3deg to +3deg
    img.style.transform = `translateX(0) rotate(${rotation}deg)`;

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

  /* ------------------------------------------------------------
     4. ALTERNATING LEFT/RIGHT LOGIC
  ------------------------------------------------------------ */
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
