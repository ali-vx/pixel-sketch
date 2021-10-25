let enteredSize = parseInt(prompt("Enter Grid Size: "));
let pixels = [];
const pixelGrid = document.querySelector(".pixel-grid");
const generateGrid = () => {
  for (let i = 0; i < enteredSize; i++) {
    for (let j = 0; j < enteredSize; j++) {
      pixels[i] = document.createElement("div");
      pixels[i].classList.add("pixel");
      pixelGrid.appendChild(pixels[i]);
      console.log(enteredSize);
    }
    pixels[i].style.setProperty("--grid-size", enteredSize);
  }
};
window.addEventListener("load", generateGrid);

pixelGrid.addEventListener("mouseover", function (e) {
  if (e.buttons > 0) {
    e.target.classList.add("black");
  }
});
pixelGrid.addEventListener("click", function (e) {
  e.target.classList.add("black");
});
