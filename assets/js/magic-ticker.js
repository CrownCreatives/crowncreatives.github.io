/* ============================================================
   CROWN CREATIVES — MAGIC TICKER (FINAL PRODUCTION VERSION)
   - Smooth infinite left-to-right scroll
   - Auto-builds a seamless loop
   - Magical fade + glow
   - Zero jank, zero blocking
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const ticker = document.querySelector(".magic-ticker");
  const track = document.querySelector(".magic-ticker-track");

  if (!ticker || !track) return;

  /* ------------------------------------------------------------
     1. TICKER MESSAGES (editable anytime)
  ------------------------------------------------------------ */
  const messages = [
    "Create boldly.",
    "Imagine fearlessly.",
    "Art is resilience.",
    "Magic begins with a spark.",
    "Every idea is a crown.",
    "Dream. Build. Transform."
  ];

  /* ------------------------------------------------------------
     2. BUILD DOM CONTENT
  ------------------------------------------------------------ */
  function buildTicker() {
    track.innerHTML = "";

    messages.forEach(msg => {
      const span = document.createElement("span");
      span.className = "ticker-item";
      span.textContent = msg;
      track.appendChild(span);
    });

    // Duplicate for seamless infinite loop
    messages.forEach(msg => {
      const span = document.createElement("span");
      span.className = "ticker-item clone";
      span.textContent = msg;
      track.appendChild(span);
    });
  }

  buildTicker();

  /* ------------------------------------------------------------
     3. ANIMATION ENGINE
     Smooth left-to-right scroll using transform
  ------------------------------------------------------------ */
  let position = 0;

  function animate() {
    position += 0.4; // speed (adjustable)
    track.style.transform = `translateX(${position}px)`;

    // Reset when first half has fully scrolled
    if (position >= track.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
