choices = ["Rock", "Paper", "Scissors"]; 
function getComputerChoice() {

    let random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

console.log(getComputerChoice());

var Rock =("Rock");
var Paper =("Paper");
var Scissors =("Scissors");

let playerSelection = prompt("Choose Rock, Paper, or Scissors");
let computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
if (playerSelection === Rock && computerSelection === Paper) {
    return "You Lose! Paper beats Rock";
} else if (playerSelection === Paper && computerSelection === Scissors) {
    return "You Lose! Scissors beats Paper";
} else if (playerSelection === Scissors && computerSelection === Rock) {
    return "You Lose! Rock beats Scissors";
} else if (playerSelection === Rock && computerSelection === Scissors) {
    return "You Win! Rocks beats Scissors";
} else if (playerSelection === Paper && computerSelection === Rock) {
    return "You Win! Paper beats Rock";
} else if (playerSelection === Scissors && computerSelection === Paper) {
    return "You Win! Scissors beats Paper";
} else {
    return "Tie Game!";
}

}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;//stores the score from each round

    
        const playerSelection = prompt("Choose Rock, Paper, Scissor")
        const computerSelection = getComputerChoice();
        
       const result = playRound(playerSelection, computerSelection);
       

       if (result.includes("Win")) {
        playerScore++;
       } else if (result.includes("Lose")) {
        computerScore++;
       }

      
    }

    if (playerScore > computerScore) {
    
    } else if (playerScore < computerScore) {
    
    } else {
    
    }


playGame();
    


