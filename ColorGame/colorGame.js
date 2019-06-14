
var numSquares = 6;
var colors = [];
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = "";
var colorDiplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var isFirstLoad = true;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

resetButton.addEventListener("click", reset);
easyBtn.addEventListener("click", function (){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function (){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

// Executes when a square is clicked
function squareClicked (){
	if (this.style.backgroundColor === pickedColor)
	{
		messageDisplay.textContent = "Correct";
		changeColors(this.style.backgroundColor);
		resetButton.textContent = "Play Again?";
	}
	else{
		messageDisplay.textContent = "Try again";
		this.style.background = "#232323";
	}
}

// Changes the color of all squares when the game is won
function changeColors (color){

	// loop through all squares 
	for (var i = 0; i < squares.length; i++)
	{
		// change color to match correct color
		squares[i].style.backgroundColor = color;
	}
	h1.style.background = color;
}

// Randomly picks one of the randomly generated colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Returns array of randomly generated colors
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

// Randomly generates each color
function getRandomColor(){
	// generate red, green and blue values from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Resets the game
function reset(){
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	// generate new random colors
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// chaange color display to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
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