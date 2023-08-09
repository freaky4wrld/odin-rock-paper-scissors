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


//function to let compute pick its hand
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];  //computer choices array
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

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
function eventListenerFunc(btn,computerSelection){
    btn.addEventListener('click', () => {
        let playerSelection = btn.getAttribute('id');
        let result = singleRound(computerSelection,playerSelection);
        const resultElment = document.querySelector('#results');
        resultElment.innerText = result;
        resultElment.style.display = 'block';
        function backToNone(){
            resultElment.style.display = 'none';
        }
        setTimeout(backToNone,700);
    });
}

function gamePlay(){
    let computerScore = 0;
    let playerScore = 0;

    while(computerScore==0||playerScore==0){
        let computerSelection = getComputerChoice()
        eventListenerFunc(rockBtn,computerSelection);
        eventListenerFunc(paperBtn,computerSelection);
        eventListenerFunc(scissorsBtn,computerSelection);

        const resultElment = document.querySelector('#results');
        let result = resultElment.innerText;
        if (result.includes("You Lose!")){
            computerScore++;
        }
        else if (result.includes("You Won!")){
            playerScore++;
        }
    }
}

gamePlay();