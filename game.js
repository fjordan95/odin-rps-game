function playGame() {
  //get computer choice function
  function getComputerChoice() {
    //establish options
    let options = ["rock", "paper", "scissors"];
    //choose random option of 3
    let computerChoiceIndex = Math.round((Math.random() * 10) % 3);
    //print option
    let computerChoice = options[computerChoiceIndex];
    return computerChoice;
  }

  let computerScore = 0;
  let humanScore = 0;
  
  let roundCount = 0

  let winner = "";

  let message = "";

  const scoreDisplay = document.createElement('div');
  const scoreDisplayContent = document.createElement('text');
  //play round function
  function playRound(e) {

if (roundCount < 5) {
    //take both choices
    let computerChoice = getComputerChoice();
    let humanChoice = e.currentTarget.id;
    console.log(humanChoice);
    //compare and increment correct score
    //log winner
    if (
      (computerChoice == "rock" && humanChoice == "scissors") ||
      (computerChoice == "paper" && humanChoice == "rock") ||
      (computerChoice == "scissors" && humanChoice == "paper")
    ) {
      computerScore++;
      message = "Computer Wins";
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && humanChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      humanScore++;
      message = "You Win";
    }

  roundCount ++
} else {
message = computerScore > humanScore ? 'You lose! Final Score ' : 'You win! Final Score '
}

  scoreDisplayContent.textContent = `${message} You: ${humanScore} Computer: ${computerScore}`;
  scoreDisplay.appendChild(scoreDisplayContent);
  console.log(roundCount)

  }

  const rockButton = document.createElement('button');
  rockButton.id = 'rock'
  rockButton.textContent = 'Rock';
  rockButton.addEventListener('click', playRound);
document.body.appendChild(rockButton);

  const paperButton = document.createElement('button');
  paperButton.id = 'paper'
  paperButton.textContent = 'Paper';
  paperButton.addEventListener('click', playRound);
document.body.appendChild(paperButton);

  const scissorsButton = document.createElement('button');
  scissorsButton.id = 'scissors'
  scissorsButton.textContent = 'Scissors';
  scissorsButton.addEventListener('click', playRound);
document.body.appendChild(scissorsButton);

  document.body.appendChild(scoreDisplay)

}
 playGame()