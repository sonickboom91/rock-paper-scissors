function getComputerChoice() {
    const hand = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][hand];
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function updateScoreAndMessage(result) {
    if (result === 'win') {
      humanScore++;
      if (humanScore === 5) {
        gameOver = true;
        message.classList.add('bold-message');
        message.textContent = "You win the game!";
      } else {
        message.textContent = "You win!";
      }
    } else if (result === 'lose') {
      computerScore++;
      if (computerScore === 5) {
        gameOver = true;
        message.classList.add('bold-message');
        message.textContent = "Computer wins the game!";
      } else {
        message.textContent = "Computer wins!";
      }
    } else {
      message.textContent = "Draw!";
    }
  
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

const message = document.querySelector('.message');
const score = document.querySelector('.score');

const rockButton = document.querySelector('.rock');

rockButton.addEventListener('click', () => {
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    const result = computerChoice === "Rock" ? "draw" : computerChoice === "Paper" ? "lose" : "win";
    updateScoreAndMessage(result);
  });

const paperButton = document.querySelector('.paper');

paperButton.addEventListener('click', () => {
   if (gameOver) return;
   const computerChoice = getComputerChoice();
   const result = computerChoice === "Paper" ? "draw" : computerChoice === "Scissors" ? "lose" : "win";
   updateScoreAndMessage(result);
});

const scissorsButton = document.querySelector('.scissors');

scissorsButton.addEventListener('click', () => {
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    const result = computerChoice === "Scissors" ? "draw" : computerChoice === "Rock" ? "lose" : "win";
    updateScoreAndMessage(result);
});