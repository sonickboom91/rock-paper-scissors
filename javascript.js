function getComputerChoice() {
    let hand = Math.floor(Math.random() * 100) + 1;

    if (hand < 35) {
        return "Rock";
    } else if (hand >= 35 && hand <= 67) {
        return "Paper";
    } else (hand > 67) 
        return "Scissors";
}

function getHumanChoice() {
    let input = prompt('Rock, paper, or scissors?').toLowerCase();

    if (input === "rock") {
    return "Rock";
    } else if (input === "paper") {
    return "Paper"; 
    } else if (input === "scissors") {
    return "Scissors";
    } else {
    return "Uh-uh-uh, you didn't type one of the right words!"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return "You lose!";
    } else if (humanSelection === 'Rock' && computerSelection === 'Scissors') {
        humanScore++;
        return "You win!"; 
    } else if (humanSelection === 'Paper' && computerSelection === 'Rock') {
        humanScore++;
        return "You win!"; 
    } else if (humanSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return "You lose!"; 
    } else if (humanSelection === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        return "You lose!"; 
    } else if (humanSelection === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        return "You win!"; 
    } else {
        return "Draw!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore, computerScore);

console.log(humanSelection, computerSelection);