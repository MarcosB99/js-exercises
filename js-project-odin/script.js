function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0) {
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("Please enter your option for the game Rock, Paper & Scissors: ");
    return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (computerChoice === humanChoice) {
        return "Draw! No one wins."
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return "You Win! Scissors beats paper";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, humanSelection));
    }

    return "End of game.";
}

console.log(playGame());
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

function winnerOfGame() {
    if (humanScore > computerScore) {
        return "The winner is the Human with " + humanScore + " points.";
    } else if (computerScore > humanScore) {
        return "The winner is the Computer with " + computerScore + " points.";
    } else {
        return "Draw! No one wins."
    }
}

console.log(winnerOfGame());