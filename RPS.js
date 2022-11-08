let playerSelection;
let computerSelection;

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
    console.log(playerSelection);
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors'){
            return 'Yo win! Rock beats scissors'
        }
        if (computerSelection == 'Paper'){
            return 'Yo lose! Paper beats Rock'
        }
    }
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper'){
            return 'Yo win! Scissors beat paper'
        }
        if (computerSelection == 'Rock'){
            return 'Yo lose! Rock beats scissors'
        }
    }
    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock'){
            return 'Yo win! Paper beats rock'
        }
        if (computerSelection == 'Scissors'){
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
        playRound( choice, getComputerChoice);
    })
});


function game() {
    
    //for (let i = 0; i < 5; i++) {
        //let result = playRound(prompt("Rock, paper, scissors, shoot!"), getComputerChoice());
        //console.log(result);
    //}
}
game();