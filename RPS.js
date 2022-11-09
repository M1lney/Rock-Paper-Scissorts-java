let playerSelection;
let computerSelection;
let playerScore = 0, computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3 + 1);
    if (randomInt === 1) {
        return 'Rock'
    } else if (randomInt === 2) {
        return 'Paper'
    }
    return 'Scissors'
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let check = computerSelection;
    console.log(check);
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors'){
            playerScore++;
            return 'Yo win! Rock beats scissors'           
        }
        if (computerSelection == 'Paper'){
            computerScore++;
            return 'Yo lose! Paper beats Rock'
        }
    }
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper'){
            playerScore++;
            return 'Yo win! Scissors beat paper'           
        }
        if (computerSelection == 'Rock'){
            computerScore++;
            return 'Yo lose! Rock beats scissors'
        }
    }
    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock'){
            playerScore++;
            return 'Yo win! Paper beats rock'          
        }
        if (computerSelection == 'Scissors'){
            computerScore++;
            return 'Yo lose! Scissors beat paper'
        }
    } 
    if (playerSelection == computerSelection) {
        return 'Its a draw!'
    }
   
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => { 
        const choice = e.target.id;
        const result = playRound(choice, getComputerChoice());
        document.querySelector('.playerScore').innerHTML = playerScore;
        document.querySelector('.compScore').innerHTML = computerScore;
    })
});

/*const container = document.querySelector('.scores').innerHTML = playerScore;
const scores = document.querySelector('.scores');
scores.textContent = "" + playerScore;
container.appendChild(scores);



/*function game() {
    while (gameOver = false) {

    }

}
game();*/