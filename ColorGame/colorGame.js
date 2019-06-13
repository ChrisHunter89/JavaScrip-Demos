var colors = [];
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = "";
var colorDiplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var isFirstLoad = true;

resetButton.addEventListener("click", reset);

function squareClicked (){
	if (this.style.backgroundColor === pickedColor)
	{
		messageDisplay.textContent = "Correct";
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
	h1.style.background = color;
	resetButton.textContent = "Play Again?";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number){
	// make an array
	var arr = [];
	// add number random colors to the array
	for (var i = 0; i < number; i++)
	{
		arr.push(getRandomColor());
	}
	// return the array
	return arr;
}

function getRandomColor(){
	// generate red, green and blue values from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	h1.style.background = "#232323";
	resetButton.textContent = "New Colors";
	// generate new random colors
	colors = generateRandomColors(6);
	// pick new random color from array
	pickedColor = pickColor();
	// chaange color display to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for(var i = 0; i < squares.length; i++){
		// add initional colors to squares
		squares[i].style.backgroundColor = colors[i];

		if (isFirstLoad){
			// add event listeners to squares
			squares[i].addEventListener("click", squareClicked);
		}
	}
	
	isFirstLoad = false;
}

reset();