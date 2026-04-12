/* ------------------------------------------------------------
   HERO SIDE GALLERY — ARCANE MAGIC ENGINE (STRONG MODE)
   Crown Creatives — Magical Drifting Memory System
------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {

  // Only run on the home page
  if (!window.location.pathname.endsWith("/")) return;

  const sideImg = document.querySelector(".hero-side-image");
  const particles = document.querySelector(".hero-side-particles");

  // Add as many images as you want here
  const galleryImages = [
    "/assets/images/gallery/Face.jpeg",
    "/assets/images/gallery/Flower.jpeg",
    "/assets/images/gallery/Fly.jpeg",
    "/assets/images/gallery/Leaf.jpeg",
    "/assets/images/gallery/Mask.jpeg",
    "/assets/images/gallery/Model.jpeg"
  ];

  let side = "left"; // start on the left

  function showArcaneImage() {
    if (!sideImg || !particles) return;

    /* ------------------------------------------------------------
       1. RANDOM IMAGE SELECTION
    ------------------------------------------------------------ */
    const randomSrc = galleryImages[Math.floor(Math.random() * galleryImages.length)];
    sideImg.src = randomSrc;

    /* ------------------------------------------------------------
       2. ALTERNATE LEFT / RIGHT
    ------------------------------------------------------------ */
    if (side === "left") {
      sideImg.style.left = "8%";
      sideImg.style.right = "auto";
      particles.style.left = "4%";
      particles.style.right = "auto";
      side = "right";
    } else {
      sideImg.style.right = "8%";
      sideImg.style.left = "auto";
      particles.style.right = "4%";
      particles.style.left = "auto";
      side = "left";
    }

    /* ------------------------------------------------------------
       3. RANDOM VERTICAL POSITION
    ------------------------------------------------------------ */
    const randomTop = Math.floor(Math.random() * 40) + 20; // 20%–60%
    sideImg.style.top = randomTop + "%";
    particles.style.top = (randomTop - 10) + "%";

    /* ------------------------------------------------------------
       4. DRIFT + ROTATION (MAGICAL LEVITATION)
    ------------------------------------------------------------ */
    const driftX = (Math.random() * 30 - 15);  // -15px to +15px
    const driftY = (Math.random() * 30 - 15);  // -15px to +15px
    const rotate = (Math.random() * 10 - 5);   // -5deg to +5deg

    sideImg.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${rotate}deg)`;

    /* ------------------------------------------------------------
       5. ACTIVATE PARTICLE BURST + GLOW PULSE
    ------------------------------------------------------------ */
    particles.classList.add("active");
    sideImg.classList.add("magic-pulse");

    /* ------------------------------------------------------------
       6. FADE IN
    ------------------------------------------------------------ */
    sideImg.style.opacity = 1;

    // Remove pulse classes after animation
    setTimeout(() => {
      particles.classList.remove("active");
      sideImg.classList.remove("magic-pulse");
    }, 2600);

    /* ------------------------------------------------------------
       7. FADE OUT AFTER 15 SECONDS
    ------------------------------------------------------------ */
    setTimeout(() => {
      sideImg.style.opacity = 0;
    }, 15000);
  }

  /* ------------------------------------------------------------
     START THE MAGIC
  ------------------------------------------------------------ */
  showArcaneImage();

  // Repeat every 18 seconds (fade in → hold → fade out → gap)
  setInterval(showArcaneImage, 18000);
});
