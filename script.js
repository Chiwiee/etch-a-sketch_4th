const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-range");
const textSlider = document.querySelector("#text");

function createSquare() {
  for (let i = 1; i <= gridSlider.value * gridSlider.value; i++) {
    const square = document.createElement("div");
    square.id = "square";
    square.style.flexBasis = divideBySliderValue();
    gridContainer.appendChild(square);
  }
}
createSquare();

function divideBySliderValue() {
  return 100 / gridSlider.value;
}

function hoverEffect(e) {
  e.target.style.backgroundColor = "black";
}

function mouseHover() {
  const square = document.querySelectorAll("#square");
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
