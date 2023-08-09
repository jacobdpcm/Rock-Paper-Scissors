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

    //Check for correct user input
    let playerSelection = prompt("Choose rock, paper, or scissor:").toLowerCase()
    while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {
        playerSelection = prompt("The only available options to enter are rock, paper, or scissor:")
    }

    if (playerSelection === computerSelection) {
        console.log("It's a tie")
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You win! rock beats scissor")
         return 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! paper beats rock")
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("You lose! rock beats scissor")
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! scissor beats paper")
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You lose! scissor beats paper")
        return 0;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
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

game()

 

