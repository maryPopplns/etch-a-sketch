import { elementGenerator } from "./elementGenerator.js";
import { svgGenerator } from "./svgGenerator.js";
import { gridGenerator } from "./grid.js";
import { eventListenerGenerator } from "./eventListenerGenerator.js";

function game() {
  const body = document.querySelector("body");

  const game = elementGenerator("div");
  const header = elementGenerator("h1");
  const grid = elementGenerator("div");
  const dialContainer = elementGenerator("div");
  const leftDial = svgGenerator("svg");
  const resetBtn = elementGenerator("button");
  const leftCircle = svgGenerator("circle");
  const rightDial = svgGenerator("svg");
  const rightCircle = svgGenerator("circle");

  game.setAttribute("class", "game");
  header.textContent = "etch-a-sketch";
  header.setAttribute("class", "header");
  grid.setAttribute("class", "grid");
  dialContainer.setAttribute("class", "dial-container");
  resetBtn.textContent = "reset";
  resetBtn.setAttribute("class", "reset-btn");
  resetBtn.setAttribute("type", "button");

  (function buttonGenerator() {
    const nodes = [leftDial, rightDial];
    const circles = [leftCircle, rightCircle];
    const sides = ["left", "right"];
    for (let i = 0; i < 2; i++) {
      nodes[i].setAttribute("id", `${sides[i]}-dial`);
      nodes[i].setAttribute("viewBox", "0 0 100 100");
      nodes[i].setAttribute("width", "100px");
      nodes[i].setAttribute("height", "100px");
      nodes[i].setAttribute("fill", "white");
      circles[i].setAttribute("class", "inner-circle");
      circles[i].setAttribute("cy", "50");
      circles[i].setAttribute("cx", "50");
      circles[i].setAttribute("r", "50");
    }
  })();

  body.prepend(game);
  game.append(header);
  game.append(grid);
  game.append(dialContainer);
  dialContainer.prepend(leftDial);
  dialContainer.append(resetBtn);
  dialContainer.append(rightDial);
  leftDial.append(leftCircle);
  rightDial.append(rightCircle);

  gridGenerator();
  eventListenerGenerator();
}

export { game };
