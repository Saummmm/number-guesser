let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanG, comG, target) {
    if (Math.abs(humanG - target) === Math.abs(comG - target)) {
        return true
    } else if (Math.abs(humanG - target) < Math.abs(comG - target)) {
        return true
    } else {
        return false
    }
}

function updateScore(str) {
    if (str === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}