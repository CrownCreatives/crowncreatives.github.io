/* ============================================================
   CROWN CREATIVES — PAGE TRANSITIONS (FINAL PRODUCTION VERSION)
   - Smooth fade-out on navigation
   - Mist overlay + crown pulse
   - Safe for all internal links
   - No conflicts with other scripts
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.querySelector(".page-transition-overlay");
  const body = document.body;

  if (!overlay) return;

  /* ------------------------------------------------------------
     1. PAGE LOAD FADE-IN
  ------------------------------------------------------------ */
  body.classList.add("page-loaded");

  /* ------------------------------------------------------------
     2. INTERCEPT INTERNAL LINKS
  ------------------------------------------------------------ */
  document.querySelectorAll("a[href]").forEach(link => {

    const url = link.getAttribute("href");

    // Skip external links
    if (url.startsWith("http") && !url.includes(location.host)) return;

    // Skip anchors
    if (url.startsWith("#")) return;

    // Skip JS links
    if (url.startsWith("javascript:")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Activate mist overlay
      overlay.classList.add("is-active");

      // Crown pulse class
      body.classList.add("page-transition-pulse");

      // Delay navigation until fade completes
      setTimeout(() => {
        window.location.href = url;
      }, 600); // matches CSS animation timing
    });
  });
});
