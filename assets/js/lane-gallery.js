document.addEventListener("DOMContentLoaded", () => {
  const leftLane = document.getElementById("lane-left");
  const rightLane = document.getElementById("lane-right");

  if (!leftLane || !rightLane) return;

  const images = [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpg",
    "/assets/gallery/3.jpg",
    "/assets/gallery/4.jpg"
  ];

  function fillLane(lane) {
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "lane-img";
      lane.appendChild(img);
    });
  }

  fillLane(leftLane);
  fillLane(rightLane);

  let offsetLeft = 0;
  let offsetRight = 0;

  function animate() {
    offsetLeft -= 0.2;
    offsetRight += 0.2;

    leftLane.style.transform = `translateY(${offsetLeft}px)`;
    rightLane.style.transform = `translateY(${offsetRight}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});

