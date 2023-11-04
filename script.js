const moves = ['rock', 'paper', 'scissor']

const winningMove = {
    'rock' : 'paper',
    'paper' : 'scissor',
    'scissor' : 'rock'
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3)
    return winningMove[moves[randomChoice]];
}

return getComputerChoice();