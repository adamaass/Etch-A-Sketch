let color = "black";
let click = true;

function populateBoard (size) {
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div)=> div.remove())
board.style.gridTemplateColumns = `repeat(${size},1fr)`;
board.style.gridTemplaterows = `repeat(${size},1fr)`;
let input = document.querySelector("input");
input.value = size;

amount = size * size
for (i = 0; i<amount; i++) {
  let square = document.createElement("div");
  square.addEventListener("mouseover", colorSquare)
  square.style.backgroundColor = "white";
  board.insertAdjacentElement("beforeend", square);
}
}

populateBoard (16);

function changeSize (input){
  if (input >= 2 && input <= 100) {
  populateBoard(input);
  }
  else {
    console.log("error");
  }
}

function colorSquare (){
  if (click){ 
    if (color === "random"){
      this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else {
    this.style.backgroundColor = color;
    }
  }
}

function changeColor (choice){
  color = choice;
}

function reset() {
  changeSize(16);
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
      click = !click;
    if (click == true) {
      document.querySelector(".mode").textContent = "mode : color"
    } else {
      document.querySelector(".mode").textContent = "mode : not color"
    }
  }
});

