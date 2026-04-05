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
      <div class="footer-social">
  <a class="footer-icon" href="https://twitter.com" target="_blank">
    <svg width="24" height="24" fill="currentColor">
      <path d="M22 4.01c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.1 7a12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.72A4.23 4.23 0 0 1 2 7.6v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 18.13a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 22 4.01z"/>
    </svg>
  </a>

  <a class="footer-icon" href="https://instagram.com" target="_blank">
    <svg width="24" height="24" fill="currentColor">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/>
    </svg>
  </a>
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
