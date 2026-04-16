document.addEventListener("DOMContentLoaded", () => {
  const lanes = document.querySelectorAll(".hero-gallery-lane");

  lanes.forEach(lane => {
    const images = lane.querySelectorAll("img");
    if (images.length === 0) return;

    let index = 0;
    images[0].style.opacity = 1;

    setInterval(() => {
      images[index].style.opacity = 0;
      index = (index + 1) % images.length;
      images[index].style.opacity = 1;
    }, 4000);
  });
});
