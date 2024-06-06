
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
    else if (choice == "paper") {
        return "Paper"
    }
    else if (choice == "scissors") {
        return "Scissors"
    }

}

var humanScore = 0;
var computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(); 

function playRound(humanChoice, computerChoice) {
    if(humanChoice = "Rock" && computerChoice =  )
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();