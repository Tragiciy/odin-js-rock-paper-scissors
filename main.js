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

let input = prompt("Choose Rock, Paper, Scissors")

console.log(input);