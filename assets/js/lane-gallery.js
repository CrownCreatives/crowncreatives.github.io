document.addEventListener("DOMContentLoaded", () => {
  const dataEl = document.getElementById("gallery-data");
  const leftLane = document.querySelector(".hero-gallery-lane.lane-left");
  const rightLane = document.querySelector(".hero-gallery-lane.lane-right");
  if (!dataEl || !leftLane || !rightLane) return;

  let laneImages = [];
  try {
    laneImages = JSON.parse(dataEl.dataset.laneImages || "[]");
  } catch (e) {
    console.error("Lane images JSON parse error", e);
    return;
  }

  if (!laneImages.length) return;

  const DURATION = 15000;
  let useLeft = true;

  function showNextLaneImage() {
    const lane = useLeft ? leftLane : rightLane;
    const otherLane = useLeft ? rightLane : leftLane;

    lane.innerHTML = "";
    otherLane.innerHTML = "";

    const src = laneImages[Math.floor(Math.random() * laneImages.length)];
    const img = document.createElement("img");
    img.src = src;
    img.className = "lane-img lane-fade-img";
    lane.appendChild(img);

    requestAnimationFrame(() => {
      img.classList.add("lane-visible");
    });

    setTimeout(() => {
      img.classList.remove("lane-visible");
      setTimeout(() => {
        useLeft = !useLeft;
        showNextLaneImage();
      }, 1000);
    }, DURATION);
  }

  showNextLaneImage();
});
