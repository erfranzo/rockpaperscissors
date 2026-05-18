
// Produces a random number between 0 and 2 and returns rock paper or scissors.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}

// Allows player to input choice
function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors");
    return choice.toLowerCase();
}

console.log(getPlayerChoice());
console.log(getComputerChoice());