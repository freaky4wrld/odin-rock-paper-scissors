// Added the typing effect for intro and instructions
const startGameBtn = document.querySelector('.start-game');
const gameIntro = document.querySelector('#game-intro');
const gameIntroText = "Let's Begin The Game!!";
const gameInstruct = document.querySelector('.game-instructions');
const gameInstructText = "You have got 5 chances to beat that Smart Pants!!"
function typeWriter(text, blankElement,i){
    if(i<text.length){
        blankElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter.bind(null,text,blankElement,i),50);
    }
}
startGameBtn.firstChild.addEventListener('click', () => {
    startGameBtn.style.display = 'none'; 
    typeWriter(gameIntroText,gameIntro,0);
    typeWriter(gameInstructText,gameInstruct,0);
},{once:true})

// button functionality with logic
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");


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
// function to add event listener to buttons
function eventListenerFunc(btn){
    btn.addEventListener('click', () => {
        let result='';
        let playerSelection = btn.getAttribute('id');
        result = singleRound(computerSelection,playerSelection);
        const resultElment = document.querySelector('#results');
        resultElment.innerText = result;
        resultElment.style.display = 'block';
        function backToNone(){
            resultElment.style.display = 'none';
        }
        setTimeout(backToNone,700);
        return result;
    });
}

// function gamePlay(){
//     //initial scores of the players
//     const playerScoreDisplay = document.querySelector('.player-score');
//     const computerScoreDisplay = document.querySelector('.computer-score');
//     let computerScore = 0;
//     let playerScore = 0;

//     // to make them play 5 rounds
//     for(i=0; i<5; i++){
//         let result = eventListenerFunc(rockBtn)||eventListenerFunc(paperBtn)||eventListenerFunc(scissorsBtn);
//         if (result.includes("You Lose!")){
//             computerScore++;
//             computerScoreDisplay.innerText = computerScore;
//         }
//         else if (result.includes("You Won!")){
//             playerScore++;
//             playerScoreDisplay.innerText = playerScore;
//         }
//     }
//     //final result evaluation
//     let finalResult = (computerScore>playerScore) ? `Computer won the match | Computer Score: ${computerScore}| Player Score: ${playerScore}`: `Player won the match | Player Score: ${playerScore}| Computer Score: ${computerScore}`;
//     return finalResult
// }