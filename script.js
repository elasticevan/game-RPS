const moves = ['rock', 'paper', 'scissor']

const winningMove = {
    'rock' : 'scissor',
    'scissor' : 'paper',
    'paper' : 'rock'
}

function getComputerChoice() {
    const randomChoice = moves[Math.floor(Math.random() * 3)]
    return randomChoice
}

function playerChoice() {
    playerInput = prompt('Please enter "rock", "paper", or "scissor"!')
    playerMove = playerInput.toLowerCase();
        if (playerMove === '' || playerMove === null || !moves.includes(playerMove)) {
            return 'Must input "rock", "paper", or "scissors!"'
        } else {
            return `${playerMove}`
        }
    }

let playerScore = ''
let computerScore = ''
let playCount = ''
let gameCount = ''

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    if (!moves.includes(playerSelection)) {
        return 'Must input "rock", "paper", or "scissors!"'
    } else {
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
}

function game(){
    for (let i = 1; i <= 5; i++) {
        const roundResult = playRound();
        if (roundResult === 'Must input "rock", "paper", or "scissors!"') {
            i--;
        } else {
        console.log(`Round ${i}: ${roundResult}`)
        }
    }
    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("player wins game")
    } else if (computerScore > playerScore) {
        console.log('computer wins game')
    } else {
        console.log('tied game')
    }
}

game();
console.log(playCount)


