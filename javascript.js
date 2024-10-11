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
    let humanHand = prompt('Rock, paper, or scissors?').toLowerCase(); 

    if (humanHand === "rock") {
        return "Rock";
    } else if (humanHand === "paper") {
        return "Paper"; 
    } else if (humanHand === "scissrors") {
        return "Scissors";
    } else {
        return "Uh-uh-uh, you didn't say one of the right words!"
    }
}

let humanHand = getHumanChoice();

console.log(humanHand);