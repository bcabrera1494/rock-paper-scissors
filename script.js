
let randomNumber = Math.random();

function getComputerChoice() {
    if (randomNumber <= 0.33333333333333333333333333333333) {
        return "Rock";
        }
    else if (randomNumber >=0.33333333333333333333333333333333 <=0.66666666666666666666666666666666) {
        return "Paper";
        }
    else if (randomNumber >= 0.66666666666666666666666666666666) {
        return "Scissors"
        }
   
    }

var choice = prompt("Type rock, paper, or scissors!", "Type your choice!").toLowerCase();

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

const humanSelection = humanChoice;
const computerSelection = computerChoice;
var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice();

function playGame() {
 
    var humanScore = 0
    var computerScore = 0
    var play = playRound(humanChoice, computerChoice);;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "Rock" && computerChoice === "Rock" 
        || humanChoice === "Paper" && computerChoice === "Paper" 
        || humanChoice === "Scissors" && computerChoice === "Scissors") {
            return "Tie game! Play again.";
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
    }

    play

}