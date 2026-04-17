---
layout: home
title: Crown Creatives
---

<!-- ============================
     HERO SECTION
============================= -->
<section class="hero-section fade-section">

  <img src="{{ '/assets/img/crown-hero.png' | relative_url }}"
       alt="Crown Creatives Hero Crown"
       class="hero-crown-cinematic">

  <div class="hero-text">
    <h2>Welcome to Crown Creatives</h2>
    <p>Where imagination becomes reality</p>
  </div>

</section>

<!-- ============================
     GALLERY LANES
============================= -->
<div class="lane lane-left">
  {% include gallery-lane-left.html %}
</div>

<div class="lane lane-right">
  {% include gallery-lane-right.html %}
</div>

<!-- ============================
     FEATURED SECTIONS
============================= -->
<section class="featured-blocks fade-section">

  <div class="featured-card">
    <h3>Projects</h3>
    <p>Explore creative builds, experiments, and magical concepts.</p>
    <a href="/projects" class="btn">View Projects</a>
  </div>

  <div class="featured-card">
    <h3>Gallery</h3>
    <p>A visual journey through imagination, colour, and magic.</p>
    <a href="/gallery" class="btn">View Gallery</a>
  </div>

  <div class="featured-card">
    <h3>Podcasts</h3>
    <p>Listen to stories, ideas, and creative conversations.</p>
    <a href="/podcasts" class="btn">Listen Now</a>
  </div>

</section>

<!-- ============================
     LIGHTBOX
============================= -->
{% include lightbox.html %}

<!-- ============================
     MAGIC TICKER
============================= -->
<div class="magic-ticker">
  <div class="magic-ticker-track">
    {% include ticker.html %}
  </div>
</div>
