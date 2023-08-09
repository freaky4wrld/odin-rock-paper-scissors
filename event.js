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

// button functionality 
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
// Active Stages
const resultDisplay = document.querySelector("#results");
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector("#computer-score");

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]; 
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


function checkGameEnd(computerScore,playerScore){
    return computerScore==5 || playerScore==5?true:false;
}

function checkGamePointWinner(computerHand,playerHand){
    if (computerHand!==playerHand) {
        switch (playerHand) {
            case "rock":
                switch (computerHand) {
                    case "paper":
                        return "You Lose! Paper beats Rock";
                        break;
                    case "scissors":
                        return "You Won! Rock beats Scissors";
                        break;
                }
                break;
    
            case "paper":
                switch (computerHand) {
                    case "rock":
                        return "You Won! Paper beats Rock";
                        break;
                    case "scissors":
                        return "You Lose! Scissors beats Paper";
                        break;
                }
                break;
    
            case "scissors":
                switch (computerHand) {
                    case "rock":
               return "You Lose! Rock beats Scissors";
                        break;
                    case "paper":
                        return "You Won! Scissors beats Paper";
                        break;
                }
                break;
        }
    }
    // if it's a tie
    else if (playerHand==computerHand){
        return "It's a Tie! You got one more attempt"
    }
}
function displayResultNone(){
    resultDisplay.style.display = 'None';
}
function displayResult(msg,speed=900){
    resultDisplay.innerText = msg;
    resultDisplay.style.display = 'block';
    setTimeout(displayResultNone,speed);
}
function playerScoreOnBoard(score){
    playerScoreDisplay.innerText = `${score}`
}
function computerScoreOnBoard(score){
    computerScoreDisplay.innerText = `${score}`
}
function scoreKeeper(computerScore,playerScore,computerHand,playerHand){
    if(!checkGameEnd(computerScore,playerScore)){
        let pointWinnerMsg = checkGamePointWinner(computerHand,playerHand);
        displayResult(pointWinnerMsg);
        if(pointWinnerMsg.includes('You Lose!')){
            computerScore++;
            computerScoreOnBoard(computerScore);
            return [computerScore,playerScore];
        }
        else if(pointWinnerMsg.includes('You Won!')){
            playerScore++;
            playerScoreOnBoard(playerScore);
            return  [computerScore,playerScore];
        }
    }
}

function gameReset(computerScore,playerScore){
    if(checkGameEnd(computerScore,playerScore)){
        displayResult("Game ended, final scores declared!!",1200);
        startGameBtn.style.display = 'block';
        gameInstruct.style.display = 'none';
        gameIntro.style.display = 'none';
        startGameBtn.addEventListener('click', ()=>{
            startGameBtn.style.display = 'none';
            playerScoreOnBoard(0);
            computerScoreOnBoard(0);
            gameIntro.style.display = 'block';
            gameInstruct.style.display = 'block';
        })
        return false;
    }
    return  true;
}



function gameMaintainer(){
    let computerScore = 0;
    let playerScore = 0;
    let computerHand = getComputerChoice();
    if(!gameReset){
        rockBtn.addEventListener('click',scoreKeeper(computerScore,playerScore,computerHand,rockBtn.getAttribute('id')));
        paperBtn.addEventListener('click',scoreKeeper(computerScore,playerScore,computerHand,paperBtn.getAttribute('id')));
        scissorsBtn.addEventListener('click',scoreKeeper(computerScore,playerScore,computerHand,scissorsBtn.getAttribute('id')));
    }
}

gameMaintainer()