const mainContainer = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");

userInput = 16;

function createSquare() {
  for (let i = 1; i <= userInput * userInput; i++) {
    const square = document.createElement("div");
    square.id = "square";
    gridContainer.appendChild(square);
  }
}
createSquare();

const square = document.querySelectorAll("#square");

square.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    hoverEffect(e);
  });
});
function hoverEffect(e) {
  e.target.style.backgroundColor = "black";
}
