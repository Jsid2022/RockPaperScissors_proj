// Randomly return either 'Rock', 'Paper' or 'Scissors'.

function computerPlay() {
    let randoutput = ["Rock", "Paper", "Scissors"];
    return randoutput[Math.floor(Math.random() * 3)];
}