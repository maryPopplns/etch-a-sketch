function eventListenerGenerator() {
  const tiles = document.querySelectorAll(".tiles");
  const resetBtn = document.querySelector(".reset-btn");
  const game = document.querySelector(".game");

  tiles.forEach((e) => {
    e.addEventListener("mouseenter", (e) => {
      const tile = document.getElementById(e.target.attributes.id.value);
      tile.setAttribute("class", "active-tiles");
    });
  });
  resetBtn.addEventListener("click", () => {
    game.setAttribute("class", "rotating");
    setTimeout(() => game.setAttribute("class", "game"), 150);
    tiles.forEach((e) => {
      if (e.classList.value === "shaken") {
        e.setAttribute("class", "tiles");
      }
      if (e.classList.value === "active-tiles") {
        e.setAttribute("class", "shaken");
      }
    });
  });
}

export { eventListenerGenerator };
