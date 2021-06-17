function gridGenerator() {
  let gridCount = 50;
  let grid = document.querySelector(".grid");
  for (let i = 0; i < gridCount ** 2; i++) {
    let element = document.createElement("div");
    element.setAttribute("class", "tiles");
    element.setAttribute("id", `${i + 1}`);
    grid.append(element);
  }
}

export { gridGenerator };
