const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-range");
const textSlider = document.querySelector("#text");
userInput = 16;

function createSquare() {
  for (let i = 1; i <= userInput * userInput; i++) {
    const square = document.createElement("div");
    square.id = "square";
    gridContainer.appendChild(square);
  }
}
createSquare();

function hoverEffect(e) {
  e.target.style.backgroundColor = "black";
}

const square = document.querySelectorAll("#square");

function mouseHover() {
  square.forEach((item) => {
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
