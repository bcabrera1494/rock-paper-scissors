
const randomNumber = (Math.random()*3);

function getComputerChoice() {
    if (randomNumber <= 1) {
        return console.log("Computer chose Rock.");
        }
    else if (randomNumber >=1 <=2) {
        return console.log("Computer chose Paper.");
        }
    else if (randomNumber >= 3 ) {
        return console.log("Computer chose Scissors.");
        }
   
    }

const choice = prompt("Type rock, paper, or scissors!", "Type your choice!").toLowerCase();

function getHumanChoice() {
    if (choice === "rock") {
        return console.log("You chose Rock.");
    }
    else if (choice === "paper") {
        return console.log("You chose Paper.");
    }
    else if (choice === "scissors") {
        return console.log("You chose Scissors.");
    }

}

const humanSelection = humanChoice;
const computerSelection = computerChoice;
var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice();

 
let humanScore = 0
let computerScore = 0
let round = playRound(humanChoice, computerChoice);

function playRound() {
        if(humanChoice === "Rock" && computerChoice === "Rock" 
        || humanChoice === "Paper" && computerChoice === "Paper" 
        || humanChoice === "Scissors" && computerChoice === "Scissors") {
            return "Tie game!";
        }
        else if(humanChoice === "Rock" && computerChoice === "Paper") {
            ++computerScore;
            return "You lose! Paper beats rock!"
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors") {
            ++humanScore;
            return "You win! Rock beats scissors!";
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors") {
            ++computerScore;
            return "You lose! Scissors beats paper!";
        }
        else if(humanChoice === "Paper" && computerChoice === "Rock") {
            ++humanScore;
            return "You win! Paper beats rock!";
        }
        else if(humanChoice === "Scissors" && computerChoice === "Rock") {
            ++computerScore
            return "You lose! Rock beats scissors!";
        }
        else if(humanChoice === "Scissors" && computerChoice === "Paper") {
            ++humanScore
            return "You win! Scissors beats paper!";
        }
        if (computerChoice === undefined) {
            getComputerChoice();
        }
    }    
 
console.log(round);