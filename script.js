
let randomNumber = Math.random();

function getComputerChoice() {
    if (randomNumber <= 0.3333333333333333) {
        return "Rock";
        }
    else if (randomNumber >=0.3333333333333333 <=0.6666666666666666) {
        return "Paper";
        }
    else if (randomNumber >= 0.6666666666666666 ) {
        return "Scissors"
        }
    }

let choice = prompt("Type rock, paper, or scissors!", "Type your choice!").toLowerCase();

function getHumanChoice() {
    if (choice === "rock") {
        return "Rock";
    }
    else if (choice === "paper") {
        return "Paper";
    }
    else if (choice === "scissors") {
        return "Scissors";
    }

}

var humanScore = 0;
var computerScore = 0;

var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice(); 

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Rock" 
    || humanChoice === "Paper" && computerChoice === "Paper" 
    || humanChoice === "Scissors" && computerChoice === "Scissors") {
        return "Tie game! Play again.";
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper") {
        return "You lose! Paper beats rock!"
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats scissors!";
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats paper!";
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats rock!";
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats scissors!";
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats paper!";
    }
}

const humanSelection = humanChoice;
const computerSelection = computerChoice;

function getHumanScore() {
    if (playRound === "Tie game! Play again.") {
        return humanScore++;
        }
    else if (playRound === "You lose! Paper beats rock!"
    || "You lose! Scissors beats paper!"
    || "You lose! Rock beats scissors!") {
        return humanScore;
    }
    else if (playRound === "You win! Rock beats scissors!"
    || "You win! Paper beats rock!"
    || "You win! Scissors beats paper!") {
        return humanScore++;
    }
}

function getComputerScore() {
    if (playRound === "Tie game! Play again.") {
        return computerScore++;
        }
    else if (playRound === "You lose! Paper beats rock!"
    || "You lose! Scissors beats paper!"
    || "You lose! Rock beats scissors!") {
        return computerScore;
    }
    else if (playRound === "You win! Rock beats scissors!"
    || "You win! Paper beats rock!"
    || "You win! Scissors beats paper!") {
        return computerScore++;
    }
}
