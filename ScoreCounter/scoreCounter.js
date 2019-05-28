
var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScoreDisplay = document.getElementById("maxScoreDisplay");


// Scores
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

p1Btn.addEventListener("click", function(){ 
	if (!gameOver && maxScore > 0){
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score === maxScore)
		{
			gameOver = true;
			maxScoreLabel.textContent += "... CONGRATULATIONS PLAYER 1, YOU HAVE WON!";
		}
	}
});

p2Btn.addEventListener("click", function(){
	if (!gameOver && maxScore > 0){
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === maxScore)
		{
			gameOver = true;
			maxScoreLabel.textContent += "... CONGRATULATIONS PLAYER 2, YOU HAVE WON!";
		}
	}
});

resetBtn.addEventListener("click", function(){
	reset();
});

function reset() {
	p1Score = 0;
	p1Display.textContent = p1Score;
	p2Score = 0;
	p2Display.textContent = p2Score;
	maxScoreDisplay = maxScore;
	gameOver = false;	
}

reset();