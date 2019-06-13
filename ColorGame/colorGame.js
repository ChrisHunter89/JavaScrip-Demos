var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDiplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

colorDisplay.textContent = pickedColor;

var isCorrect = false;

for(var i = 0; i < squares.length; i++){
	// add initional colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add event listeners to squares
	squares[i].addEventListener("click", squareClicked);
}

function squareClicked () {
	if (this.style.backgroundColor === pickedColor)
	{
		messageDisplay.textContent = "Correct";
		isCorrect = true;
		changeColors(this.style.backgroundColor);
	}
	else{
		messageDisplay.textContent = "Try again";
		this.style.background = "#232323";
	}
}

function changeColors (color){

	// loop through all squares 
	for (var i = 0; i < squares.length; i++)
	{
		// change color to match correct color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}