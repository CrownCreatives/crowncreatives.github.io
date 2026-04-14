/* ============================================================
   PAGE TRANSITION SCRIPT
   Adds mystical mist fade + crown shimmer pulse
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // Create the transition overlay
  const overlay = document.createElement("div");
  overlay.className = "page-transition-overlay";
  document.body.appendChild(overlay);

  // Add pulse class to crowns during transitions
  function pulseCrowns() {
    document.body.classList.add("page-transition-pulse");
    setTimeout(() => {
      document.body.classList.remove("page-transition-pulse");
    }, 1400);
  }

  // Trigger transition on link clicks
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

    // Ignore anchors and external links
    if (!url || url.startsWith("#") || url.startsWith("http")) return;

    link.addEventListener("click", event => {
      event.preventDefault();

      // Activate overlay
      overlay.classList.add("is-active");

      // Pulse crowns
      pulseCrowns();

      // Navigate after animation
      setTimeout(() => {
        window.location = url;
      }, 900);
    });
  });

});
