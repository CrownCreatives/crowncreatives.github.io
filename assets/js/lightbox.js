// Magical Lightbox
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Open lightbox when clicking any gallery image
  document.querySelectorAll(".magic-gallery-image").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  // Close button
  document.querySelector(".lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  // Click outside image closes lightbox
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
});
