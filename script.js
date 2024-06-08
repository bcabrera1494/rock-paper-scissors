
const randomNumber = (Math.random()*3);

function getComputerChoice() {
    if (randomNumber <= 1) {
        return "Rock";
        }
    else if (randomNumber >=1 <=2) {
        return "Paper";
        }
    else if (randomNumber >= 3 ) {
        return "Scissors"
        }
   
    }

const choice = prompt("Type rock, paper, or scissors!", "Type your choice!").toLowerCase();

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
 
    }