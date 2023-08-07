const choices = ["rock", "paper", "scissors"]; 

function getComputerChoice(){
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
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

function gamePlay(){
    let computerScore = 0;
    let playerScore = 0;
    for(i=0; i<5; i++){
        playerSelection = prompt("Enter your choice!!");
        let result = singleRound(computerSelection,playerSelection);
        if (result.includes("You Lose!")){
            computerScore++;
        }
        else if (result.includes("You Won!")){
            playerScore++;
        }
    }
    let finalResult = (computerScore>playerScore) ? `Computer won the match | Computer Score: ${computerScore}| Player Score: ${playerScore}`: `Player won the match | Player Score: ${playerScore}| Computer Score: ${computerScore}`;
    return finalResult
}

console.log(gamePlay())
