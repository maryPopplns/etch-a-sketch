function eventListenerGenerator() {
  const tiles = document.querySelectorAll(".tiles");
  const resetBtn = document.querySelector(".reset-btn");

  tiles.forEach((e) => {
    e.addEventListener("mouseenter", (e) => {
      const tile = document.getElementById(e.target.attributes.id.value);
      tile.setAttribute("class", "hovered");
    });
  });
  resetBtn.addEventListener("click", () => {
    tiles.forEach((e) => {
      e.setAttribute("class", "tiles");
    });
  });
}

export { eventListenerGenerator };
