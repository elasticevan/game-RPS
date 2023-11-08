const moves = ['rock', 'paper', 'scissor']

const winningMove = {
    'rock' : 'scissor',
    'scissor' : 'paper',
    'paper' : 'rock'
}

let computerSelection;
function getComputerChoice() {
    const randomChoice = moves[Math.floor(Math.random() * 3)]
    return randomChoice
}


let playerScore = 0
let computerScore = 0
let playCount = 0

const round = document.createElement('div')
const player = document.createElement('div')
const computer = document.createElement('div')
document.body.appendChild(round)
document.body.appendChild(player)
document.body.appendChild(computer)

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => {  
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        game();
    })
})

function playRound() {
        playCount++;
        if (winningMove[playerSelection] === computerSelection) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`
        } else if (winningMove[computerSelection] === playerSelection) {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } else {
            return 'Draw!'
        }
    }

const result = document.createElement('div');
const gameResult = document.createElement('div');
const gameOver = document.createElement('div');
document.body.appendChild(result)
document.body.appendChild(gameResult)
document.body.appendChild(gameOver)

function game(){
        const roundResult = playRound();
        result.textContent = (`${roundResult}`);
        round.textContent = `Round: ${playCount}`;
        player.textContent = `Player: ${playerScore}`;
        computer.textContent = `Computer: ${computerScore}`;

        gameResult.textContent = '';
        gameOver.textContent = '';
        if (playCount === 5) {
            if (playerScore > computerScore) {
                gameResult.textContent = "player wins game"
            } else if (computerScore > playerScore) {
                gameResult.textContent = 'computer wins game'
            } else {
                gameResult.textContent = 'tied game'
            } 
            gameOver.textContent = ("Game has restarted")
            resetGame();
        } 
    }

function resetGame() {
    playCount = 0;
    playerScore = 0;
    computerScore = 0; 
}
  

