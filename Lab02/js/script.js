//Global variables
let randomNumber;
let attempts = 0;
let totalWins = 0;
let totalLosses = 0;

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
  
   //showing the Guess button
   document.querySelector("#guessBtn").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus(); //adding focus to textbox
   playerGuess.value = ""; //clearing the textbox

   let feedback = document.querySelector("#feedback");
   feedback.textContent = ""; //clearing the feedback

   //clearing previous guesses
   document.querySelector("#guesses").textContent = "";
   
   //resetting remaining attempts
   attempts = 0;
   document.querySelector("#attemptsLeft").textContent = "7";
}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        document.querySelector("#feedback");
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You Won!";
        feedback.style.color = "darkgreen";
        totalWins++;
        document.querySelector("#wins").textContent = totalWins;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            totalLosses++;
            document.querySelector("#losses").textContent = totalLosses;
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
            document.querySelector("#attemptsLeft").textContent = 7 - attempts;
        } else {
            feedback.textContent = "Guess was low";
            document.querySelector("#attemptsLeft").textContent = 7 - attempts;
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; // hides Guess button
    resetBtn.style.display = "inline"; // displays Reset button
}






