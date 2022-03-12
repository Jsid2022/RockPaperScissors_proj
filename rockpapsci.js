// Function to Create Computer's Random Value/Choice
function computerPlay(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}
// Function to store Player/User Choice
function playerPlay(){
    let playerChoice = prompt("Do You Choose (1)Rock (2)Paper (3)Scissors");
    if(playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
        playerChoice = "Rock";
    } else if(playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
        playerChoice = "Paper";
    } else if(playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
        playerChoice = "Scissors";
    } else if (playerChoice.toLowerCase() !== "rock" || "paper" || "scissors" || parseInt(playerChoice) !== 1 || 2 || 3) {
        // If value is not either rock,paper,scissors or 1,2,3 give a error message
        alert("Please Select from (1)Rock (2)Paper (3)Scissors");
        playerSelection();
    } else {
        console.log("Don't Want to Play?");
    }
    return playerChoice;
}

// Variable to Store Computer's Choice
let computerSelection = computerPlay();

// Variable to Store Player/user choice
let playerSelection = playerPlay;

// Variable to store Computer Score
let compScore = 0;

// Variable to store Player Score
let playerScore = 0;
let roundNo = 0;
// Function to Define Rules of each Round
function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("It's a draw!");
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Paper beats Rock, You Lose!");
        compScore++;
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Paper beats Rock, You Won!");
        playerScore++;
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Rock beats Scissors, You Won!");
        playerScore++;
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Rock beats Scissors, You lose!");
        compScore++;
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Scissors beats Paper, You Won!");
        playerScore++;
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        roundNo++;
        console.log("Round: " +roundNo);
        console.log("Your Choice: "+ playerSelection + ", " + "Computer: " + computerSelection);
        console.log("Scissors beats Paper, You Lose!");
        compScore++;
        console.log("Your Score: " + playerScore +", " +"Computer Score: " + compScore);
    } else {
        console.log("Game is not Working, Sorry for the Inconvenience.");
    }
}
// Function to Create Best of 5 Rounds for this game
function game() {
    for(let i = 0; i < 5; i++) {
        playRound(playerPlay(),computerPlay());
    }
}
game();

// Function to Declare Winner
function winner() {
    if(playerScore === compScore) {
        console.log("Result\nIt was a Close Game!!");
    } else if (playerScore > compScore) {
        console.log("Result\nYou won this Game!!");
    } else {
        console.log("Result\nYou Lost this Game!!");
    }
}
winner();