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

//Set up computer choise
//Set up computer choise
function playRound(playerScore, computerScore) {
    const computerSelection = getComputerChoice();
    const round = document.querySelector('.round')

//Set up Displaying Computer's choice
    const comChoice = document.createElement('img')
    comChoice.classList.add('comimage') 
    comChoice.src = "./images/computer.jpg"
    const comrock = document.querySelector('.comrock')
    const compaper = document.querySelector('.compaper')
    const comscissor = document.querySelector('.comscissor')
    comrock.innerHTML = ''
    compaper.innerHTML = ''
    comscissor.innerHTML = ''
    if(computerSelection === 'rock'){
        comrock.appendChild(comChoice);
    } else if(computerSelection === 'paper'){
        compaper.appendChild(comChoice)
    } else if(computerSelection === 'scissor'){
        comscissor.appendChild(comChoice)
    }

//Set up every possible outcome for a round
//Set up Displaying Computer's choice
    const comChoice = document.createElement('img')
    comChoice.classList.add('comimage') 
    comChoice.src = "./images/computer.jpg"
    const comrock = document.querySelector('.comrock')
    const compaper = document.querySelector('.compaper')
    const comscissor = document.querySelector('.comscissor')
    comrock.innerHTML = ''
    compaper.innerHTML = ''
    comscissor.innerHTML = ''
    if(computerSelection === 'rock'){
        comrock.appendChild(comChoice);
    } else if(computerSelection === 'paper'){
        compaper.appendChild(comChoice)
    } else if(computerSelection === 'scissor'){
        comscissor.appendChild(comChoice)
    }

//Set up every possible outcome for a round
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

/*function game() {
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
}*/

let playerScore = 0;
let computerScore = 0;
let playerSelection;
const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissor = document.querySelector('.scissor')
const score = document.querySelector('.game')
const final = document.querySelector('.final')

let x = null
let y = 1

//User choice inputs
    btnRock.addEventListener('click', function(){
        playerSelection = 'rock';
        x = playRound(playerScore, computerScore);
        if (x === 0) {
            ++computerScore
        } else if (x === 1) {
            ++playerScore
        }
        score.textContent = "The score is Player: " + playerScore + ", " + "Computer: " + computerScore;
        if(playerScore === 5) {
            final.textContent = 'Enjoy this feeling of pride and acomplishment over defeating a world class AI.';
        }
    
        if(computerScore === 5) {
            final.textContent = 'The merciless of the AI was too much for you. May God have mercy on your soul.';
        }
    
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
        if(playerScore === 5) {
            final.textContent = 'Enjoy this feeling of pride and acomplishment over defeating a world class AI.';
        }
    
        if(computerScore === 5) {
            final.textContent = 'The merciless of the AI was too much for you. May God have mercy on your soul.';
        }
    
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
        if(playerScore === 5) {
            final.textContent = 'Enjoy this feeling of pride and acomplishment over defeating a world class AI.';
        }
    
        if(computerScore === 5) {
            final.textContent = 'The merciless of the AI was too much for you. May God have mercy on your soul.';
        }
    
    })













 

