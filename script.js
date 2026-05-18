let humanScore = 0;
let computerScore = 0;

// Produces a random number between 0 and 2 and returns rock paper or scissors
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

// Plays a single round of rock paper scissors and updates the score
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You just tied");
    }
   else if (humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win!');
    humanScore++;
    }
    else {
        console.log('You lose');
        computerScore++;
    }
}

// Plays 3 rounds of rock paper scissors and keeps score
for (let i = 0; i < 3; i++) {
    const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

    playRound(playerSelection, computerSelection);
    
    console.log('Your score is '+ humanScore);
    console.log('The computer score is ' + computerScore);
}
