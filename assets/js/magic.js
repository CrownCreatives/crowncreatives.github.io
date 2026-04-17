document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".magic-particles");

  // If the element doesn't exist, stop safely
  if (!container) return;

  function spawnImage() {
    const img = document.createElement("span");
    container.appendChild(img);

    setTimeout(() => img.remove(), 4000);
  }

  function startLane() {
    spawnImage();
    setInterval(spawnImage, 800);
  }

  startLane();
});
