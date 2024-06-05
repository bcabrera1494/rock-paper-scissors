
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

let choice = prompt("Type rock, paper, or scissors!", "Type your choice!");

function getHumanChoice() {
    if (choice === "rock" | choice === "Rock") {
        return "Rock"
    }
    else if (choice === "paper" | choice === "Paper") {
        return "Paper"
    }
    else if (choice === "scissors" | choice === "Scissors") {
        return "Scissors"
    }

}
console.log(getHumanChoice);