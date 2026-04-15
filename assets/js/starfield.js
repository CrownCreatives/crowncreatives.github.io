document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const canvas = document.createElement("canvas");
  canvas.className = "starfield-canvas";
  body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2,
    a: Math.random() * 0.8 + 0.2
  }));

  function draw() {
    if (body.dataset.theme !== "dark") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${star.a})`;
      ctx.fill();

      star.a += (Math.random() - 0.5) * 0.02;
      star.a = Math.max(0.1, Math.min(1, star.a));
    });

    requestAnimationFrame(draw);
  }

  draw();
});
