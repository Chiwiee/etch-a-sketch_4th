const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-range");
const textSlider = document.querySelector("#text");
const enterBtn = document.querySelector("#enter");
const colorPick = document.querySelector("#favcolor");
const randomRGB = document.querySelector("#random-color");
const progDarkening = document.querySelector("#prog-darkening");
const eraser = document.querySelector("#eraser");
const hover = document.querySelector("#hover");
const hold = document.querySelector("#hold");

function createItems() {
  for (let i = 1; i <= gridSlider.value * gridSlider.value; i++) {
    const item = document.createElement("div");
    item.id = "item";
    item.style.flexBasis = `${divideBySliderValue()}%`;
    gridContainer.appendChild(item);
  }
}
createItems();
function divideBySliderValue() {
  return 100 / gridSlider.value;
}

function colorBlack(e) {
  e.target.style.backgroundColor = "black";
}

function colorWhite(e) {
  e.target.style.backgroundColor = "white";
}
function randomColor(e) {
  const red = Math.floor(Math.random() * 256) + 1;
  const green = Math.floor(Math.random() * 256) + 1;
  const blue = Math.floor(Math.random() * 256) + 1;

  e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
function mouseHover() {
  const items = document.querySelectorAll("#item");
  items.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      hoverEffect(e);
    });
  });
}
mouseHover();
function showGridSliderValue() {
  textSlider.textContent = `${gridSlider.value} x ${gridSlider.value}`;
  gridSlider.oninput = function () {
    textSlider.textContent = `${gridSlider.value} x ${gridSlider.value}`;
  };
}
showGridSliderValue();

function disabledCheckbox() {
  colorPick.disabled = true;
  randomRGB.disabled = true;
  progDarkening.disabled = true;
  eraser.disabled = true;
  hover.disabled = true;
  hold.disabled = true;
}
disabledCheckbox();
function enabledCheckbox() {
  colorPick.disabled = false;
  randomRGB.disabled = false;
  progDarkening.disabled = true;
  eraser.disabled = false;
  hover.disabled = false;
  hold.disabled = true;
}
function enter() {
  enabledCheckbox();

  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.children[0]);
  }
  createItems();
  mouseHover();
  alert(randomColor());
}
