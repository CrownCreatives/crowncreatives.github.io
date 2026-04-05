/* Safe injector */
function inject(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html;
}

/* HEADER */
inject("include-header", `
  <header>
    <img src="assets/images/big-logo.png" class="light-logo" alt="Crown Creatives Logo">
    <img src="assets/images/big-logo-dark.png" class="dark-logo" alt="Crown Creatives Logo Dark">
    <h1>Crown Creatives</h1>
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

/* FOOTER */
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
      </div>

    </div>
  </footer>
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
