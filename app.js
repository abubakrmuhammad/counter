// Select all the buttons
var p1Button = document.querySelector('button#p1');
var p2Button = document.querySelector('button#p2');
var resetButton = document.querySelector('button#reset');

// Select the winning score input
var winningScoreInput = document.querySelector('input#winningScore');

// Select score displays
var p1Display = document.querySelector('span#p1');
var p2Display = document.querySelector('span#p2');

// Variable to store Scores
var p1Score = 0;
var p2Score = 0;

// Game control Variables
var gameIsOver = false;
var winningScore = Number(winningScoreInput.value);

// Click listener for p1 Button
p1Button.addEventListener('click', function() {
  // Check if the game is over
  if (!gameIsOver) {
    // Increment the score
    p1Score++;
    // Check if player score is equal to winning score
    if (p1Score === winningScore) {
      // Show the winner
      p1Display.classList.add('winner');

      // Game Over
      gameOver();
    }

    // Update the score on screen
    p1Display.textContent = p1Score;
  }
});

// Click listener for p2 Button
p2Button.addEventListener('click', function() {
  // Check if the game is over
  if (!gameIsOver) {
    // Increment the score
    p2Score++;
    // Check if player score is equal to winning score
    if (p2Score === winningScore) {
      // Show the winner
      p2Display.classList.add('winner');

      // Game Over
      gameOver();
    }

    // Update the score on screen
    p2Display.textContent = p2Score;
  }
});

// Click listener for reset button
resetButton.addEventListener('click', function() {
  // Reset the game
  reset();
});

// Change listener for winning score input
winningScoreInput.addEventListener('change', function() {
  // Set the winning score equal to the input value
  winningScore = Number(this.value);

  // Reset the game
  reset();
});

// Reset the game
function reset() {
  // Reset player scores
  p1Score = 0;
  p2Score = 0;

  // Reset displayed player scores
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  // Enable the player buttons
  p1Button.disabled = false;
  p2Button.disabled = false;

  // Hide the winner
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');

  // Remove the animation from reset button
  resetButton.classList.remove('animate');

  // Game is not over
  gameIsOver = false;
}

// Game Over
function gameOver() {
  // Disable the player buttons
  p1Button.disabled = true;
  p2Button.disabled = true;

  // Animate the reset button
  resetButton.classList.add('animate');

  // Game is over
  gameIsOver = true;
}
