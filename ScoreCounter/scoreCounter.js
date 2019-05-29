
var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var maxScoreInput = document.querySelector("#winningScoreInput");
var resetBtn = document.getElementById("reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScoreDisplay = document.getElementById("maxScoreDisplay");

var p1Score = 0;
var p2Score = 0;
var maxScore = 0;
var gameOver = false;

p1Btn.addEventListener("click", function(){ 
	if (!gameOver && winningScore > 0){
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score === winningScore)
		{
			gameOver = true;
			p1Display.classList.add("winner");
			p2Display.classList.add("looser");
			maxScoreLabel.textContent += "... CONGRATULATIONS PLAYER 1, YOU HAVE WON!";
		}
	}
});

p2Btn.addEventListener("click", function(){
	if (!gameOver && winningScore > 0){
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === winningScore)
		{
			gameOver = true;
			p2Display.classList.add("winner");
			p1Display.classList.add("looser");
			maxScoreLabel.textContent += "... CONGRATULATIONS PLAYER 2, YOU HAVE WON!";
		}
	}
});

resetBtn.addEventListener("click", function(){
	reset();
});

maxScoreInput.addEventListener("change", function() {
	winningScore = Number(this.value);
	maxScoreDisplay.textContent = winningScore;
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	p1Display.classList = "";
	p2Display.classList = "";
};

reset();