
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
        return "Rock"
    }
    else if (choice === "paper") {
        return "Paper"
    }
    else if (choice === "scissors") {
        return "Scissors"
    }

}

var humanScore = 0;
var computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(); 

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "Tie game! Play again"
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper") {
        return "You lose! Paper beats rock!"
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats scissors!"
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats paper!"
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats rock!"
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats scissors!"
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats paper!"
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(playRound);