const galleryImages = [
  "assets/gallery/Face.jpeg",
  "assets/gallery/Flower.jpeg",
  "assets/gallery/Fly.jpeg"
];

function spawnImage(lane) {
  const img = document.createElement("img");
  img.src = galleryImages[Math.floor(Math.random() * galleryImages.length)];

  lane.appendChild(img);

  // Fade in
  requestAnimationFrame(() => {
    img.style.opacity = "1";
  });

  // Hold for 10 seconds
  setTimeout(() => {
    img.style.opacity = "0";

    // Remove after fade-out
    setTimeout(() => img.remove(), 2000);
  }, 10000);
}

function startLane(lane) {
  spawnImage(lane);
  setInterval(() => spawnImage(lane), 12000);
}

document.addEventListener("DOMContentLoaded", () => {
  const leftLane = document.querySelector(".hero-gallery-lane.lane-left");
  const rightLane = document.querySelector(".hero-gallery-lane.lane-right");

  startLane(leftLane);
  startLane(rightLane);
});
