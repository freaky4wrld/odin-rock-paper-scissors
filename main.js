const choices = ["rock", "paper", "scissors"];  //computer choices array

//function to let compute pick its hand
function getComputerChoice(){
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
//globally accessible computer choice
const computerSelection = getComputerChoice()

// funtion to evaluate a single round results
function singleRound(computerSelection,playerSelection) {

    //result evaluation
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
        }
    }
    // if it's a tie
    else if (playerSelection==computerSelection){
        return "It's a Tie! You got one more attempt"
    }
}

function gamePlay(){
    //initial scores of the players
    let computerScore = 0;
    let playerScore = 0;

    // to make them play 5 rounds
    for(i=0; i<5; i++){
        let result = eventListenerFunc(rockBtn)||eventListenerFunc(paperBtn)||eventListenerFunc(scissorsBtn);
        
    }
    //final result evaluation
    let finalResult = (computerScore>playerScore) ? `Computer won the match | Computer Score: ${computerScore}| Player Score: ${playerScore}`: `Player won the match | Player Score: ${playerScore}| Computer Score: ${computerScore}`;
    return finalResult
}

// console.log(gamePlay())
