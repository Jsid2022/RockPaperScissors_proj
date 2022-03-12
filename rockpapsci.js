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