document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".lightbox-trigger").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      lightbox.style.display = "block";
      lightboxImg.src = item.href;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
