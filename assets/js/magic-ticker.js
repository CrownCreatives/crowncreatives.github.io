document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector(".magic-ticker");
  if (!ticker) return;

  let index = 0;
  const messages = [
    "Artistry in every stroke",
    "Resilience in every challenge",
    "Imagination in every world"
  ];

  function updateTicker() {
    ticker.textContent = messages[index];
    index = (index + 1) % messages.length;
  }

  updateTicker();
  setInterval(updateTicker, 6000);
});
