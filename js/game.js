import { elementGenerator } from "./elementGenerator.js";
import { svgGenerator } from "./svgGenerator.js";

function game() {
  const body = document.querySelector("body");
  const game = elementGenerator("div");
  const dialContainer = elementGenerator("div");
  const leftDial = svgGenerator("svg");
  const leftCircle = svgGenerator("circle");
  const rightDial = svgGenerator("svg");
  const rightCircle = svgGenerator("circle");

  game.setAttribute("class", "game");
  dialContainer.setAttribute("class", "dial-container");
  leftDial.setAttribute("id", "left-dial");
  leftDial.setAttribute("viewBox", "0 0 100 100");
  leftDial.setAttribute("width", "100px");
  leftDial.setAttribute("height", "100px");
  leftDial.setAttribute("fill", "white");
  leftCircle.setAttribute("class", "inner-circle");
  leftCircle.setAttribute("cy", "50");
  leftCircle.setAttribute("cx", "50");
  leftCircle.setAttribute("r", "50");
  rightDial.setAttribute("id", "right-dial");
  rightDial.setAttribute("viewBox", "0 0 100 100");
  rightDial.setAttribute("width", "100px");
  rightDial.setAttribute("height", "100px");
  rightDial.setAttribute("fill", "white");
  rightCircle.setAttribute("class", "inner-circle");
  rightCircle.setAttribute("cy", "50");
  rightCircle.setAttribute("cx", "50");
  rightCircle.setAttribute("r", "50");

  leftDial.append(leftCircle);
  rightDial.append(rightCircle);
  dialContainer.append(rightDial);
  dialContainer.prepend(leftDial);
  game.append(dialContainer);
  body.prepend(game);
}

export { game };
