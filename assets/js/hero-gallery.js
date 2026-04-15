document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hero-gallery");
  if (!container) return;

  const images = [
    "/assets/hero/hero1.jpg",
    "/assets/hero/hero2.jpg",
    "/assets/hero/hero3.jpg"
  ];

  let index = 0;

  function showImage() {
    container.style.backgroundImage = `url(${images[index]})`;
    container.classList.add("fade-in");

    setTimeout(() => container.classList.remove("fade-in"), 1000);

    index = (index + 1) % images.length;
  }

  showImage();
  setInterval(showImage, 7000);
});

