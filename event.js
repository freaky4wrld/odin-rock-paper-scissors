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
    typeWriter(gameIntroText,gameIntro,0);
    typeWriter(gameInstructText,gameInstruct,0);
},{once:true})