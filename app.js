let enteredSize = parseInt(prompt("Enter Grid Size: "));
let pixels = [];
const pixelGrid = document.querySelector(".pixel-grid");

window.addEventListener("load", () => {
  for (let i = 0; i < enteredSize; i++) {
    for (let j = 0; j < enteredSize; j++) {
      pixels[i] = document.createElement("div");
      pixels[i].classList.add("pixel");
      pixelGrid.appendChild(pixels[i]);
      console.log(enteredSize);
    }
    pixels[i].classList.add("new-line");
    pixels[i].style.setProperty("--grid-size", enteredSize);
  }
});
