var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
//mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i=0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    // ternary operator: if statement, ? = then, 2 possibilities
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
      });
  }
}

function setupSquares() {
  //color picking event
  for (var i = 0; i < squares.length;  i++) {
    //add click listeners to squares
      squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "You Win!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#696969";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length;  i++) {
    if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
    }
  }
  h1.style.background = "#a6584d";
}

//resetButton event listener
  resetButton.addEventListener("click", function() {
reset();
})

//choose random color ids
function randomColor() {
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//generate colors from color ids
function generateRandomColors(num) {
//make an array
var arr = []
//repeat num times
for(var i = 0;  i < num;  i++) {
  //get random color and push in to array
arr.push(randomColor())
}
//return that array
return arr;
}

//randomly assign winning color
function pickColor() {
//pick a random number
var random = Math.floor(Math.random() * colors.length);
//assign color for number
return colors[random];
}

//change color event
function changeColors(color) {
  //loop through all squares
  for(var i = 0;  i < squares.length;  i++) {
  //change each color to match given color
  squares[i].style.background = color;
  }
}
