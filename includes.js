// HEADER
document.getElementById("include-header").innerHTML = `
  <header>
    <img src="assets/images/big-logo.png" alt="Crown Creatives Logo">
    <h1>Crown Creatives</h1>
    <div class="hamburger" onclick="document.body.classList.toggle('nav-open');">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
`;

// NAV
document.getElementById("include-nav").innerHTML = `
  <nav>
    <a href="index.html">Home</a>
    <a href="blog.html">Blog</a>
    <a href="gallery.html">Gallery</a>
    <a href="videos.html">Videos</a>
    <a href="about.html">About</a>
  </nav>
`;

// FOOTER
document.getElementById("include-footer").innerHTML = `
  <footer class="site-footer">
    <div class="footer-row">
      <div class="footer-left">
        © ${new Date().getFullYear()} Crown Creatives
      </div>
      <div class="footer-center">
        <a class="footer-email" href="mailto:crowncreatives@outlook.com">
          crowncreatives@outlook.com
        </a>
        <div class="footer-social">
          <a class="footer-icon" href="https://facebook.com" target="profile.php?id=61556386467490" rel="noopener">X</a>
          <a class="footer-icon" href="https://instagram.com" target="crown_creatives_uk/" rel="noopener">IG</a>
        </div>
      </div>
      <div class="footer-right">
        <button class="back-to-top" onclick="window.scrollTo({top:0, behavior:'smooth'});">
          Back to top
        </button>
      </div>
    </div>
  </footer>
`;

// TICKER
document.getElementById("include-ticker").innerHTML = `
  <div class="ticker-bar">
    <div class="ticker-inner">
      <span>Art • Recovery • Rebuilding • Crown Creatives •</span>
      <span>3D & Fantasy Art • Mental Health Journey • Creative Recovery •</span>
    </div>
  </div>
`;

