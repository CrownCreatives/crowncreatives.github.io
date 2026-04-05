/* Helper to safely inject HTML */
function inject(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html;
}

/* ============================
   HEADER
   ============================ */
inject("include-header", `
  <header>
    <img src="assets/images/big-logo.png" class="light-logo" alt="Crown Creatives Logo">
    <img src="assets/images/big-logo-dark.png" class="dark-logo" alt="Crown Creatives Logo Dark">
    <h1>Crown Creatives</h1>

    <div class="hamburger" onclick="document.body.classList.toggle('nav-open');">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
`);

/* ============================
   NAVIGATION
   ============================ */
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

/* ============================
   FOOTER
   ============================ */
inject("include-footer", `
  <footer class="site-footer">
    <div class="footer-row">

      <div class="footer-left">
        © 2026 Crown Creatives – Created by Pete
      </div>

      <div class="footer-center">
        <button class="back-to-top" onclick="window.scrollTo({top:0, behavior:'smooth'});">
          ↑ Back to Top
        </button>

        <button class="dark-mode-toggle" onclick="document.body.classList.toggle('dark-mode');">
          🌙 Dark Mode
        </button>
      </div>

      <div class="footer-right">
        <a class="footer-email" href="mailto:crowncreatives@outlook.com">
          crowncreatives@outlook.com
        </a>

        <div class="footer-social">

          <!-- Instagram -->
          <a class="footer-icon" href="https://instagram.com" target="_blank" rel="noopener">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/>
            </svg>
          </a>

          <!-- Facebook -->
          <a class="footer-icon" href="https://facebook.com" target="_blank" rel="noopener">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
            </svg>
          </a>

        </div>
      </div>

    </div>
  </footer>
`);

/* ============================
   TICKER
   ============================ */
inject("include-ticker", `
  <div class="ticker-bar">
    <div class="ticker-inner">

      <span>
        <svg viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z"/></svg>
        Art • Recovery • Rebuilding • Crown Creatives •
      </span>

      <span>
        <svg viewBox="0 0 24 24"><path d="M12 22L9 16H15L12 22Z"/></svg>
        3D & Fantasy Art • Mental Health Journey • Creative Recovery •
      </span>

    </div>
  </div>
`);
