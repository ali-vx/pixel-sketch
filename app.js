let enteredSize = parseInt(prompt("Enter Grid Size: "));
let pixels = [];
const pixelGrid = document.querySelector(".pixel-grid");
const clearBtn = document.querySelector(".clear-btn");

const generateGrid = () => {
  let a = 0;
  for (let i = 0; i < enteredSize; i++) {
    for (let j = 0; j < enteredSize; j++) {
      pixels[a] = document.createElement("div");
      pixels[a].classList.add("pixel");
      pixelGrid.appendChild(pixels[a]);
      a++;
    }
    pixels[a - 1].style.setProperty("--grid-size", enteredSize);
  }
};

const clearGrid = () => {
  for (let el of pixels) {
    if (el.classList.contains("black")) el.classList.remove("black");
  }
};

clearBtn.addEventListener("click", clearGrid);
window.addEventListener("load", generateGrid);
pixelGrid.addEventListener("mouseover", function (e) {
  if (e.buttons > 0) {
    e.target.classList.add("black");
  }
});
pixelGrid.addEventListener("click", function (e) {
  e.target.classList.add("black");
});
