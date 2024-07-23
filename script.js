const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-range");
const textSlider = document.querySelector("#text");
const enterBtn = document.querySelector("#enter");
const colorPick = document.querySelector("#favcolor");
const randomRGB = document.querySelector("#random");
// const progColor = document.querySelector("#prog-color");
const eraser = document.querySelector("#eraser");
// const hover = document.querySelector("#hover");
// const hold = document.querySelector("#hold");
const btn = document.querySelectorAll("button");

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

function colorWhite(e) {
  e.target.style.backgroundColor = "white";
}
function randomColor(e) {
  const red = Math.floor(Math.random() * 256) + 1;
  const green = Math.floor(Math.random() * 256) + 1;
  const blue = Math.floor(Math.random() * 256) + 1;

  e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
  e.target.style.boxShadow = `0px 0px 2px 1px rgb(${red},${green},${blue})`;
}
function pickingColor(e) {
  e.target.style.backgroundColor = colorPick.value;
  e.target.style.boxShadow = `0px 0px 5px 1px ${colorPick.value}`;
}
function mouseHover(id) {
  const items = document.querySelectorAll("#item");
  items.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (id == "color-picker") {
        pickingColor(e);
      } else if (id == "random") {
        randomColor(e);
      } else if (id == "eraser") {
        colorWhite(e);
      } else {
        e.target.style.backgroundColor = "#000000";
      }
    });
  });
}

function getButtonId() {
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      mouseHover(button.id);
    });
  });
}
function showGridSliderValue() {
  textSlider.textContent = `${gridSlider.value} x ${gridSlider.value}`;
  gridSlider.oninput = function () {
    textSlider.textContent = `${gridSlider.value} x ${gridSlider.value}`;
    generateItems();
  };
}

function generateItems() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.children[0]);
  }
  createItems();
  mouseHover();
}
mouseHover();
getButtonId();
showGridSliderValue();

console.log(colorPick);
// console.log(progColor);
console.log(eraser);
console.log(randomRGB);
// console.log(hover);
// console.log(hold);
console.log(gridContainer);
