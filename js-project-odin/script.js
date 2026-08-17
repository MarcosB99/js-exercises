const container = document.querySelector(".container");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const results = document.createElement("div");
const resultsLabel = document.createElement("p");
const pointsOfGame = document.createElement("p");
const winnerOfRPS = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
results.setAttribute("style", "class='results'");

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

rockBtn.addEventListener("click", () => {
    console.log(playRound(getComputerChoice(), "Rock"));

});

paperBtn.addEventListener("click", () => {
    console.log(playRound(getComputerChoice(), "Paper"));
});

scissorsBtn.addEventListener("click", () => {
    console.log(playRound(getComputerChoice(), "Scissors"));
});

function playRound(computerChoice, humanChoice) {

    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        resultsLabel.textContent = "You lose! Rock beats Scissors";
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        resultsLabel.textContent = "You lose! Paper beats Rock";
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        resultsLabel.textContent = "You lose! Scissors beats paper";
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    } else if (computerChoice === humanChoice) {
        resultsLabel.textContent = "Draw! No one wins."
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        resultsLabel.textContent = "You win! Rock beats Scissors";
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        resultsLabel.textContent = "You win! Paper beats Rock";
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        resultsLabel.textContent = "You Win! Scissors beats paper";
        pointsOfGame.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    }
    winnerOfGame();
}

function winnerOfGame() {
    if (humanScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        return winnerOfRPS.textContent = "The winner is the Human with " + humanScore + " points.";
    } else if (computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        return winnerOfRPS.textContent = "The winner is the Computer with " + computerScore + " points.";
    }
}

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(results);
container.appendChild(resultsLabel);
container.appendChild(pointsOfGame);
container.appendChild(winnerOfRPS);