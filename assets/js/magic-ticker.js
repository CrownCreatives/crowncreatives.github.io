document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".cc-ticker-track");
  if (!track) return;

  let speed = 60; // Medium magical speed
  let position = 0;

  function animate() {
    position -= 0.5;
    track.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) > track.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(animate);
  }

  track.addEventListener("mouseenter", () => speed = 0);
  track.addEventListener("mouseleave", () => speed = 60);

  animate();
});
