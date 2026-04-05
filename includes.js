/* Utility */
function inject(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/* HEADER */
inject("include-header", `
  <header>
    <div class="header-inner">
      <div class="logo-wrapper">
        <img src="assets/images/big-logo.png" class="light-logo crown-logo" alt="">
        <img src="assets/images/big-logo-dark.png" class="dark-logo crown-logo" alt="">
        <div class="sparkle-trail"></div>
      </div>
      <h1>Crown Creatives</h1>
    </div>
  </header>
`);

/* NAVIGATION */
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

/* TICKER */
inject("include-ticker", `
  <div class="ticker-bar">
    <div class="ticker-inner">
      <span>Art • Recovery • Rebuilding • Crown Creatives •</span>
      <span>3D & Fantasy Art • Mental Health Journey • Creative Recovery •</span>
    </div>
  </div>
`);

/* FOOTER — Option 3 layout */
inject("include-footer", `
  <footer class="site-footer">
    <div class="footer-row">

      <div class="footer-left">
        © 2026 Crown Creatives – Created by Pete
      </div>

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
              </radGradient>
            </defs>
            <path fill="url(#fbGlow)" d="M13 3h4V0h-4c-3.3 0-6 2.7-6 6v3H4v4h3v11h4V13h3l1-4h-4V6c0-1.1.9-2 2-2z"/>
          </svg>
        </a>
      </div>

      <div class="footer-right">
        <button class="back-to-top" onclick="window.scrollTo({top:0, behavior:'smooth'});">↑ Back to Top</button>
        <button class="dark-mode-toggle" onclick="document.body.classList.toggle('dark-mode');">🌙 Dark Mode</button>
      </div>

    </div>
  </footer>
`);
