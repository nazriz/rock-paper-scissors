  // Function for computer action rock/paper/scissors

  const action = ['rock','paper','scissors'];
  function computerPlay(action) {
      return action[Math.floor(Math.random()*action.length)];
  }
  let compMove = computerPlay(action);

  // Human input
 

  function humanInput() {
      return prompt("Rock, Paper or Scissors?").toLowerCase();
  }
  let humanMove = humanInput();

  // Function that allows one round of play between human and computer
  // and award one point to the winner of the round
  let compScore = 0;
  let humanScore = 0;
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
          return "You have tied! Try again";
      }
      else if (playerSelection === "rock" && computerSelection === "paper"){
          compScore++;
      return "You Lose! Paper beats Rock!";

      } else if (playerSelection === "paper" && computerSelection === "scissors"){
          compScore++;
          return "You Lose! Scissors beats Paper!";

      } else if (playerSelection === "scissors" && computerSelection === "rock") {
          compScore++;
          return "You Lose! Rock beats Scissors!";
      } else {
          humanScore++;
          return "You Win!";
      }
          
  
  }
  // code that initializes the game in console
/* console.log(humanMove);
 console.log(compMove);
 console.log(playRound(humanInput, compMove)); */

  let i = 0;
  function game() {
      while (i < 5) {
          let compMove = computerPlay(action);
          let humanMove = humanInput();
      console.log(humanMove);
      console.log(compMove);
      console.log(playRound(humanMove, compMove));
      console.log("Human score is: " + humanScore);
      console.log("Computer score is: " + compScore);
      i++;
   }
  }

 let playGame = game();
//  declares an overall winner in the console
function scoreChecker(){
  if (humanScore > compScore) {
     return "You\'ve beaten the computer!";
 } else if (humanScore < compScore) {
     return "The computer has beaten you!";
 } else {
     return "You both lose!";
 } 
}

console.log(scoreChecker());