// Function to Create Computer's Random Value/Choice
function computerPlay(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}
// Function to store Player/User Choice
function playerPlay(){
    console.log("Do You Choose (1)Rock (2)Paper (3)Scissors");
    let playerChoice = prompt("Do You Choose (1)Rock (2)Paper (3)Scissors");
    if(playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
        playerChoice = "Rock";
    } else if(playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
        playerChoice = "Paper";
    } else if(playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
        playerChoice = "Scissors";
    } else if (playerChoice.toLowerCase() !== "rock" || "paper" || "scissors" || parseInt(playerChoice) !== 1 || 2 || 3) {
        // If value is not either rock,paper,scissors or 1,2,3 give a error message
        alert("Please Try Again!!");
        playerSelection();
    } else {
        console.log("Don't Want to Play?");
    }
    return playerChoice;
}

// Variable to Store Computer's Choice
let computerSelection = computerPlay();

// Variable to Store Player/user choice
let playerSelection = playerPlay();

// Variable to store Computer Score
let compScore = 0;

// Variable to store Player Score
let playerScore = 0;

// Function to Define Rules of each Round
function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("It's a draw!");
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Paper beats Rock, You Lose!");
        compScore++;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Paper beats Rock, You Won!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("scissors beats Rock, You Lose!");
        compScore++;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Scissors beats Rock, You Won!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Scissors beats Paper, You Won!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Scissors beats Paper, You Lose!");
        compScore++;
    } else {
        console.log("Game is not Working, Sorry for the Inconvenience.");
    }
}
playRound(playerSelection,computerSelection);
console.log("Your Score: " + playerScore + ", " + "Computer Score: " + compScore);
// Function to Create Best of 5 Rounds for this game