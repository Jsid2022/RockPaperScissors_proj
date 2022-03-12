let userinput = prompt("Rock, Paper or Scissors ?");
let playerSelection = userinput.toLowerCase();

// Randomly return either 'Rock', 'Paper' or 'Scissors'.
let randoutput = ["Rock", "Paper", "Scissors"];
let computerSelection = randoutput[Math.floor(Math.random() * 3)];

// function that plays a single round of Rock Paper Scissors.
console.log(computerSelection)
function startGame() {
    if (playerSelection == "rock" && computerSelection === "Paper") {
        console.log('You lose!');
    } else if (playerSelection == "rock" && computerSelection === "Rock") {
        console.log('Tie!');
    } else {
        console.log('You won!')
    }
}