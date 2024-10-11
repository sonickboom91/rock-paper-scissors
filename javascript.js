function getComputerChoice() {
    let hand = Math.floor(Math.random() * 100) + 1;

    if (hand < 35) {
        return "Rock";
    } else if (hand >= 35 && hand <= 67) {
        return "Paper";
    } else (hand > 67) 
        return "Scissors";
}

let roshambo = getComputerChoice();

console.log(roshambo);

function getHumanChoice() {
    let humanHand = prompt('Rock, paper, or scissors?') 
}

getHumanChoice();