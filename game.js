//declare computerChoice variable
let computerChoice = "";
//getComputerChoice function
function getComputerChoice() {
  //choose a random number and reduce to three options
let randomNumber = Math.floor(Math.random() * 100) % 3;
//option 1 rock, option 2 paper, option 3 scissors
//can i make this smaller?
switch(randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
      return computerChoice;
  };

//humanChoice function: accept input, return input value
//define humanChoice variable
let humanChoice = "";
function getHumanChoice () {
//accept input
let input = prompt("Rock, Paper, or Scissors");
//make all lowercase
//assign result to humanChoice
return humanChoice = input.toLowerCase();
}


function playGame() {

//score keeping: tracks score
//create humanScore
let humanScore = 0;
//create computerScore
let computerScore = 0;

function playRound() {
  console.log(getComputerChoice());
  console.log(getHumanChoice());

    //if human wins, (rock, scissors) || (scissors, paper) || (paper, rock)
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper")||
    (humanChoice == "paper" && computerChoice == "rock")) {
    
    humanScore++; } else if (
    
    //if computer wins, (scissors, rock) || (paper, scissors) || (rock, paper)
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")) {
    computerScore++;} else {
    
    //else tie, play again
    console.log("try again");
} return humanScore, computerScore;
}
  
//create roundCount
let roundCount = 5;

    //play game function calls play round 5 times

//if roundCount < 5, call playGame and roundCount + 1
      for (let r = 0; r < roundCount; r++) {
        console.log(playRound());
    } return console.log(humanScore, computerScore);
}
console.log(playGame())