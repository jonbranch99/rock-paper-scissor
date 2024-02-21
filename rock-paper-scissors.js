choices = ["Rock", "Paper", "Scissors"]; //choices is an array containing the three possible choices: 'Rock', 'Paper', and 'Scissors'
function getComputerChoice() {

    let random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

console.log(getComputerChoice());
