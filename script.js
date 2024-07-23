const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-range");
const textSlider = document.querySelector("#text");
const enterBtn = document.querySelector("#enter");
const colorPick = document.querySelector("#favcolor");
const randomRGB = document.querySelector("#random");
const border = document.querySelector("#border");
const eraser = document.querySelector("#eraser");
const hover = document.querySelector("#hover");
const hold = document.querySelector("#hold");
const btn = document.querySelectorAll("button");
const option = document.querySelectorAll(".option");
const mode = document.querySelectorAll(".mode");

let isMouseDown;
let optionId;
let modeId;

function createItems() {
  for (let i = 1; i <= gridSlider.value * gridSlider.value; i++) {
    let value = 100 / gridSlider.value;
    const item = document.createElement("div");
    item.id = "item";
    item.style.flexBasis = `${value}%`;
    gridContainer.appendChild(item);
  }
}

function eraserColor(e) {
  e.target.style.backgroundColor = "";
  e.target.style.boxShadow = "";
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
function mouseHover() {
  const items = document.querySelectorAll("#item");
  items.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (optionId == "color-picker") {
        if (modeId == "hover") {
          pickingColor(e);
        } else if (modeId == "hold") {
          if (!isMouseDown) return;
          pickingColor(e);
        }
      } else if (optionId == "random") {
        if (modeId == "hover") {
          randomColor(e);
        } else if (modeId == "hold") {
          if (!isMouseDown) return;
          randomColor(e);
        }
      } else if (optionId == "eraser") {
        if (modeId == "hover") {
          eraserColor(e);
        } else if (modeId == "hold") {
          if (!isMouseDown) return;
          eraserColor(e);
        }
      } else {
        e.target.style.backgroundColor = colorPick.value;
      }
    });
  });
}
function getButtonId() {
  option.forEach((button) => {
    button.addEventListener("click", () => (optionId = button.id));
  });
  mode.forEach((button) => {
    button.addEventListener("click", () => (modeId = button.id));
  });
}

function showBorder() {
  const items = document.querySelectorAll("#item");
  items.forEach((item) => {
    item.style.border = `1px solid ${colorPick.value}`;
  });
}
function removeBorder() {
  const items = document.querySelectorAll("#item");
  items.forEach((item) => {
    item.style.border = "";
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
  removeBorder();
}
function mouseEvent() {
  window.document.addEventListener("mousedown", () => {
    isMouseDown = true;
    console.log(isMouseDown);
  });
  window.document.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log(isMouseDown);
  });
}
createItems();
mouseEvent();
mouseHover();
getButtonId();
showGridSliderValue();

window.addEventListener("keydown", () => {
  console.log(colorPick);
  console.log(border);
  console.log(eraser);
  console.log(randomRGB);
  console.log(hover);
  console.log(hold);
  console.log(gridContainer);
  console.log(`OptionId: ${optionId}`);
  console.log(`ModeId: ${modeId}`);
});
