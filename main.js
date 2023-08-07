const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let index = Math.floor(Math.random() * choices.length);
    console.log(index)
    console.log(choices[index]);
    return choices[index];
}
const playerSelection = "PAPER";
const computerSelection = getComputerChoice()

function singleRound(computerSelection,playerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    
    if (computerSelection!==playerSelection) {
        switch (playerSelection) {
            case "rock":
                switch (computerSelection) {
                    case "paper":
                        return "You Lose! Paper beats Rock"
                        break;
                    case "scissors":
                        return "You Won! Rock beats Scissors"
                }
                break;
    
            case "paper":
                switch (computerSelection) {
                    case "rock":
                        return "You Won! Paper beats Rock"
                        break;
                    case "scissors":
                        return "You Lose! Scissors beats Paper"
                }
                break;
    
            case "scissors":
                switch (computerSelection) {
                    case "rock":
                        return "You Lose! Rock beats Scissors"
                        break;
                    case "paper":
                        return "You Won! Scissors beats Paper"
                }
                break;
            
    
            default:
                return "Please enter a valid choice"
                break;
        }
    }
    else if (playerSelection==computerSelection){
        return "It's a Tie! You got one more attempt"
    }
}

console.log(singleRound(computerSelection,playerSelection));