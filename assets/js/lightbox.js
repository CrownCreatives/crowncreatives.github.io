// Magical Lightbox
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  if (!lightbox || !lightboxImg) return;

  // Open lightbox when clicking any gallery image
  document.querySelectorAll(".magic-gallery-image").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("open");
    });
  }

  // Click outside image closes lightbox
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
});
