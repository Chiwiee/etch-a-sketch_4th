const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const square = document.querySelectorAll("#square");

userInput = 16;

function createSquare() {
  for (let i = 1; i <= userInput * userInput; i++) {
    const square = document.createElement("div");
    square.id = "square";
    gridContainer.appendChild(square);
  }
}
createSquare();
