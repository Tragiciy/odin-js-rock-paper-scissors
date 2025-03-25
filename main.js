function getComputerChoice() {
    let random = Math.random()
    if (random < 0.33) {
        return "Rock"
    } else if (random >0.33 && random < 0.66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())

function getHumanChoice () {
    return prompt("Choose Rock, Paper, Scissors");
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice().toUpperCase();
let computerChoice = getComputerChoice().toUpperCase();

function playRound (humanChoice, computerChoice) {

    if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore ++;
        console.log("Computer Win!");
    } else if (humanChoice === "ROCK" && computerChoice === "ROCK") {
        console.log("Draw!");
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore ++;
        console.log("You Win!");
    } else if (humanChoice === "PAPER" && computerChoice === "PAPER") {
        console.log("Draw!");
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore ++;
        console.log("You Win!");
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore ++;
        console.log("Computer Win!");
    } else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log("Draw!");
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore ++;
        console.log("You Win!");
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore ++;
        console.log("Computer Win!");
    }
}

playRound(humanChoice, computerChoice);
