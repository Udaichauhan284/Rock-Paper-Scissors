let userScore = 0;
let computerScore = 0;
const uScore=document.getElementById('user-score');
const cScore=document.getElementById('comp-score');
const scoreBorad=document.querySelector('.scoreBorad');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.round(Math.random()*3);
    return choices[randomNumber];
}
let convertToWord = (letter) =>{
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    return "Scissors";
}
let win = (user,comp) =>{
    userScore++;
    uScore.innerHTML=userScore;
    cScore.innerHTML=computerScore;
    result.innerHTML = `User's ${convertToWord(user)} beats Comp's ${convertToWord(comp)} . You WIN! ✌`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(()=>{document.getElementById(user).classList.remove('green-glow')},300);
}
let loss = (user,comp)=>{
    computerScore++;
    uScore.innerHTML = userScore;
    cScore.innerHTML = computerScore;
    result.innerHTML = `User's ${convertToWord(user)} lose by Comp's ${convertToWord(comp)}. You LOSS! 👎`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(()=>{document.getElementById(user).classList.remove('red-glow')},300);
}
let draw = (user,comp) =>{
    uScore.innerHTML = userScore;
    cScore.innerHTML = computerScore;
    result.innerHTML = `User's ${convertToWord(user)} equals Comp's ${convertToWord(comp)}. DRAW! 🤝`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(()=>{document.getElementById(user).classList.remove('grey-glow')},300);
}
function game(userChoices){
    const computerChoice = getComputerChoice();
    switch (userChoices+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoices,computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            loss(userChoices,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoices,computerChoice);
            break;
    }
}

function main(){
    rock.addEventListener('click',()=>{
        game("r");
    })
    paper.addEventListener('click',()=>{
        game("p");
    })
    scissor.addEventListener('click',()=>{
        game("s");
    })
}
main();
