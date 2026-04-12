/* ------------------------------------------------------------
   HERO SIDE GALLERY — ENHANCED RANDOM MAGIC ENGINE
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {

  // Only run on the home page
  if (!window.location.pathname.endsWith("/")) return;

  const sideImg = document.querySelector(".hero-side-image");

  // Your gallery folder images
  const galleryImages = [
    "/assets/images/gallery/Face.jpeg",
    "/assets/images/gallery/Flower.jpeg",
    "/assets/images/gallery/Fly.jpeg",
    "/assets/images/gallery/Leaf.jpeg",
    "/assets/images/gallery/Mask.jpeg",
    "/assets/images/gallery/Model.jpeg"
  ];

  let side = "left"; // start on the left

  function showRandomImage() {
    if (!sideImg) return;

    // Pick a random image
    const randomSrc = galleryImages[Math.floor(Math.random() * galleryImages.length)];
    sideImg.src = randomSrc;

    // Alternate left/right
    if (side === "left") {
      sideImg.style.left = "8%";
      sideImg.style.right = "auto";
      side = "right";
    } else {
      sideImg.style.right = "8%";
      sideImg.style.left = "auto";
      side = "left";
    }

    // Random vertical position (20%–60%)
    const randomTop = Math.floor(Math.random() * 40) + 20;
    sideImg.style.top = randomTop + "%";

    // Random drift amount
    const driftX = (Math.random() * 20 - 10);   // -10px to +10px
    const driftY = (Math.random() * 20 - 10);   // -10px to +10px

    // Random gentle rotation
    const rotate = (Math.random() * 6 - 3);     // -3deg to +3deg

    // Apply drift + rotation
    sideImg.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${rotate}deg)`;

    // Add sparkle pulse class
    sideImg.classList.add("sparkle");

    // Fade in
    sideImg.style.opacity = 1;

    // Remove sparkle class after animation
    setTimeout(() => {
      sideImg.classList.remove("sparkle");
    }, 2400);

    // Fade out after 15 seconds
    setTimeout(() => {
      sideImg.style.opacity = 0;
    }, 15000);
  }

  // Start immediately
  showRandomImage();

  // Repeat every 18 seconds (fade in → hold → fade out → gap)
  setInterval(showRandomImage, 18000);
});
