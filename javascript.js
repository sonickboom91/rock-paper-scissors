function getComputerChoice() {
    let hand = Math.floor(Math.random() * 100) + 1;

    if (hand < 35) {
        return "Rock";
    } else if (hand >= 35 && hand <= 67) {
        return "Paper";
    } else (hand > 67) 
        return "Scissors";
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const message = document.querySelector('.message');
const score = document.querySelector('.score');
score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

const rockButton = document.querySelector('.rock');

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();

    if (gameOver) {
        return;
    }

    if (computerChoice === "Rock" && (humanScore < 5 && computerScore < 5)) {
        message.textContent = "Draw!";
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    } else if (computerChoice === 'Paper' && (humanScore < 5 && computerScore < 5)) {
        computerScore++;
        if (humanScore === 5) {
            message.textContent = "Congrats, you win the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else if (computerScore === 5) {
            message.textContent = "Sorry, the computer wins the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else {
            message.textContent = 'Computer wins!';
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
    } else if (computerChoice === 'Scissors' && (humanScore < 5 && computerScore < 5)) {
        humanScore++;
        if (humanScore === 5) {
            message.textContent = "Congrats, you win the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else if (computerScore === 5) {
            message.textContent = "Sorry, the computer wins the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else {
            message.textContent = 'You win!';
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
    } else {
        message.textContent = '';
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }
});

const paperButton = document.querySelector('.paper');

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();

    if (gameOver) {
        return;
    }

    if (computerChoice === "Rock" && (humanScore < 5 && computerScore < 5)) {
        humanScore++;
        if (humanScore === 5) {
            message.textContent = "Congrats, you win the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else if (computerScore === 5) {
            message.textContent = "Sorry, the computer wins the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else {
            message.textContent = "You win!";
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
    } else if (computerChoice === 'Paper' && (humanScore < 5 && computerScore < 5)) {
        message.textContent = 'Draw!';
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    } else if (computerChoice === 'Scissors' && (humanScore < 5 && computerScore < 5)) {
        computerScore++;
        if (humanScore === 5) {
            message.textContent = "Congrats, you win the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else if (computerScore === 5) {
            message.textContent = "Sorry, the computer wins the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else {
            message.textContent = 'Computer wins!';
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
    } else {
        message.textContent = '';
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }
});

const scissorsButton = document.querySelector('.scissors');

scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();

    if (gameOver) {
        return;
    }

    if (computerChoice === "Rock" && (humanScore < 5 && computerScore < 5)) {
        computerScore++;
        if (humanScore === 5) {
            message.textContent = "Congrats, you win the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else if (computerScore === 5) {
            message.textContent = "Sorry, the computer wins the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else {
            message.textContent = "Computer wins!";
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
    } else if (computerChoice === 'Paper' && (humanScore < 5 && computerScore < 5)) {
        humanScore++;
        if (humanScore === 5) {
            message.textContent = "Congrats, you win the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else if (computerScore === 5) {
            message.textContent = "Sorry, the computer wins the game!";
            message.classList.add('bold-message');
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
            gameOver = true;
        } else {
            message.textContent = 'You win!';
            score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
    } else if (computerChoice === 'Scissors' && (humanScore < 5 && computerScore < 5)) {
        message.textContent = 'Draw!';
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    } else {
        message.textContent = ''
        score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }
});