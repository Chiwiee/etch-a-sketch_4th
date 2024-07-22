const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-range");
const textSlider = document.querySelector("#text");
const enterBtn = document.querySelector("#enter");
const items = document.querySelectorAll("#item");

function createItems() {
  for (let i = 1; i <= gridSlider.value * gridSlider.value; i++) {
    const item = document.createElement("div");
    item.id = "item";
    item.style.flexBasis = `${divideBySliderValue()}%`;
    gridContainer.appendChild(item);
  }
}

function divideBySliderValue() {
  return 100 / gridSlider.value;
}

function hoverEffect(e) {
  e.target.style.backgroundColor = "black";
}

function mouseHover() {
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

function enter() {
  createItems();
}
