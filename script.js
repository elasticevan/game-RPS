const moves = ['rock', 'paper', 'scissor']

const winningMove = {
    'rock' : 'scissor',
    'scissor' : 'paper',
    'paper' : 'rock'
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3)
    return moves[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (winningMove[playerSelection] === computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (winningMove[computerSelection] === playerSelection) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return 'Draw!'
    }
}

const playerSelection = 'paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
