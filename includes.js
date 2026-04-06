/* Utility */
function inject(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/* ---------------------------------------------------------
   HEADER
--------------------------------------------------------- */
inject("include-header", `
  <header>
    <div class="header-inner">
      <div class="logo-wrapper">
        <!-- Day Mode Logo -->
        <img src="assets/images/big-logo.png" class="light-logo crown-logo" alt="">

        <!-- Dark Mode Emerald Logo -->
        <img src="assets/images/emerald-crown.png" class="dark-logo crown-logo" alt="">

        <!-- Magical Sparkle Trail -->
        <div class="sparkle-trail"></div>
      </div>

      <h1>Crown Creatives</h1>
    </div>
  </header>
`);

/* ---------------------------------------------------------
   NAVIGATION
--------------------------------------------------------- */
inject("include-nav", `
  <nav>
    <a href="index.html">Home</a>
    <a href="blog.html">Blog</a>
    <a href="gallery.html">Gallery</a>
    <a href="videos.html">Videos</a>
    <a href="podcast.html">Podcast</a>
    <a href="about.html">About</a>
  </nav>
`);

/* ---------------------------------------------------------
   TICKER
--------------------------------------------------------- */
inject("include-ticker", `
  <div class="ticker-bar">
    <div class="ticker-inner">
      <span>Art • Recovery • Rebuilding • Crown Creatives •</span>
      <span>Fantasy • 3D • Creative Journey • Mental Health •</span>
    </div>
  </div>
`);

/* ---------------------------------------------------------
   FOOTER — Option 3 (Left • Center • Right)
--------------------------------------------------------- */
inject("include-footer", `
  <footer class="site-footer">
    <div class="footer-row">

      <!-- LEFT -->
      <div class="footer-left">
        © 2026 Crown Creatives – Created by Pete
      </div>

      <!-- CENTER — Glowing Fantasy Icons -->
      <div class="footer-center social-group">

        <a href="https://instagram.com" class="social-icon" aria-label="Instagram">
          <div class="rune-circle"></div>
          <svg viewBox="0 0 24 24" class="icon">
            <defs>
              <radialGradient id="igGlow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stop-color="var(--arcane-pink)" />
                <stop offset="100%" stop-color="var(--ember)" />
              </radialGradient>
            </defs>
            <path fill="url(#igGlow)" d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          </svg>
        </a>

        <a href="https://facebook.com" class="social-icon" aria-label="Facebook">
          <div class="rune-circle"></div>
          <svg viewBox="0 0 24 24" class="icon">
            <defs>
              <radialGradient id="fbGlow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stop-color="var(--crystal-light)" />
                <stop offset="100%" stop-color="var(--arcane-violet)" />
              </radialGradient>
            </defs>
            <path fill="url(#fbGlow)" d="M13 3h4V0h-4c-3.3 0-6 2.7-6 6v3H4v4h3v11h4V13h3l1-4h-4V6c0-1.1.9-2 2-2z"/>
          </svg>
        </a>

      </div>

      <!-- RIGHT -->
      <div class="footer-right">
        <button class="back-to-top" onclick="window.scrollTo({top:0, behavior:'smooth'});">↑ Back to Top</button>
        <button class="dark-mode-toggle" onclick="document.body.classList.toggle('dark-mode');">🌙 Dark Mode</button>
      </div>
/* ============================================================
   CROWN CREATIVES — Ambient Emerald Particle Generator
   Spawns drifting particles behind all content
   ============================================================ */

(function spawnAmbientParticles() {
  const particleCount = 40; // adjust for more/less particles

  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }

  function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");

    // random starting position
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";

    // random animation duration + delay
    const duration = 6 + Math.random() * 6; // 6–12s
    const delay = Math.random() * 6;

    p.style.animationDuration = duration + "s";
    p.style.animationDelay = delay + "s";

    document.body.appendChild(p);

    // respawn particle when animation ends
    p.addEventListener("animationend", () => {
      p.remove();
      createParticle();
    });
  }
})();

    </div>
  </footer>
`);
