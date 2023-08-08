//Need random number 0-2
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        x = "rock"
    } else if (x === 1) {
        x = "scissor"
    } else if (x === 2) {
        x = "paper"
    }
    console.log(x)
    return x;
}

//Set up every possible outcome for a round
function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("It's a tie")
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You win! rock beats scissor")
         return ++playerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! paper beats rock")
        return ++computerScore;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("You lose! rock beats scissor")
        return ++computerScore;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! scissor beats paper")
        return ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You lose! scissor beats paper")
        return ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! paper beats rock")
        return ++playerScore;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
}

const playerSelection = "scisSor";
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection, playerScore, computerScore))