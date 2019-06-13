var colors = generateRandomColors(6);

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

function generateRandomColors(number)
{
	// make an array
	var arr = [];
	// add number random colors to the array
	for (var i = 0; i < number; i++)
	{
		var rgbStr = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		console.log(rgbStr);
		arr.push(rgbStr);
	}
	// return the array
	return arr;
}
