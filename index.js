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
function playRound(playerScore, computerScore) {
    const computerSelection = getComputerChoice();
    const round = document.querySelector('.round')

    if (playerSelection === computerSelection) {
        round.textContent = "It's a tie";
        console.log("It's a tie")
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        round.textContent = "You win! Rock beats scissor";
        console.log("You win! rock beats scissor")
         return 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        round.textContent = "You lose! Paper beats rock";
        console.log("You lose! paper beats rock")
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        round.textContent = "You lose! Rock beats scissor";
        console.log("You lose! rock beats scissor")
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        round.textContent = "You win! Scissor beats paper";
        console.log("You win! scissor beats paper")
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        round.textContent = "You lose! Scissor beats paper";
        console.log("You lose! scissor beats paper")
        return 0;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        round.textContent = "You win! Paper beats rock";
        console.log("You win! paper beats rock")
        return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    //Loops 5 rounds per match
    for(let i = 0; i < 5; i++) {
        let x = playRound(playerScore, computerScore)
        if (x === 0) {
            ++computerScore
        } else if (x === 1) {
            ++playerScore
        }
        console.log("The score is Player: " + playerScore + ", " + "Computer: " + computerScore)
    }

    //Match results
    if (playerScore > computerScore) {
        console.log("Player wins the match " + playerScore + "-" + computerScore)
    } else if (computerScore > playerScore) {
        console.log("Computer wins the match " + computerScore + "-" + playerScore)
    } else if (playerScore === computerScore) {
        console.log("The match was a tie " + playerScore + "-" + computerScore)
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissor = document.querySelector('.scissor')
const score = document.querySelector('.game')

let x = null

btnRock.addEventListener('click', function(){
    playerSelection = 'rock';
    x = playRound(playerScore, computerScore);
    if (x === 0) {
        ++computerScore
    } else if (x === 1) {
        ++playerScore
    }
    score.textContent = "The score is Player: " + playerScore + ", " + "Computer: " + computerScore;
})
btnPaper.addEventListener('click', function(){
    playerSelection = 'paper';
    x = playRound(playerScore, computerScore);
    if (x === 0) {
        ++computerScore
    } else if (x === 1) {
        ++playerScore
    }
    score.textContent = "The score is Player: " + playerScore + ", " + "Computer: " + computerScore;
})
btnScissor.addEventListener('click', function(){
    playerSelection = 'scissor';
    x = playRound(playerScore, computerScore);
    if (x === 0) {
        ++computerScore
    } else if (x === 1) {
        ++playerScore
    }
    score.textContent = "The score is Player: " + playerScore + ", " + "Computer: " + computerScore;
})









 

