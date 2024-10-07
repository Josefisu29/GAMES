// let player1Name = "";
// let player2Name = "";
// let player1Choice = "";
// let player2Choice = "";
// let gameCounter = 0;
// let totalGames = 1;

// document.getElementById("player1Name").addEventListener("input", function () {
//   player1Name = this.value;
// });

// document.getElementById("player2Name").addEventListener("input", function () {
//   player2Name = this.value;
// });

// document.getElementById("numGames").addEventListener("input", function () {
//   totalGames = parseInt(this.value);
// });

// function playRockPaperScissors() {
//   const choices = ["rock", "paper", "scissors"];

//   if (!choices.includes(player1Choice) || !choices.includes(player2Choice)) {
//     return "Invalid choice! Please choose rock, paper, or scissors.";
//   }

//   if (player1Choice === player2Choice) {
//     return `It's a tie between ${player1Name} and ${player2Name}!`;
//   }

//   if (
//     (player1Choice === "rock" && player2Choice === "scissors") ||
//     (player1Choice === "paper" && player2Choice === "rock") ||
//     (player1Choice === "scissors" && player2Choice === "paper")
//   ) {
//     return `${player1Name} wins!`;
//   } else {
//     return `${player2Name} wins!`;
//   }
// }

// function makeChoice(choice) {
//   if (!player1Choice) {
//     player1Choice = choice;
//     document.getElementById(
//       "Display-result"
//     ).innerText = `${player1Name} chose ${choice}. Waiting for ${player2Name}...`;
//   } else {
//     player2Choice = choice;
//     const result = playRockPaperScissors();
//     document.getElementById("Display-result").innerText = result;
//     gameCounter++;
//     document.getElementById(
//       "gameCounter"
//     ).innerText = `Game ${gameCounter} of ${totalGames}`;

//     if (gameCounter >= totalGames) {
//       document.getElementById("Display-result").innerText +=
//         " Game over! Starting new series.";
//       gameCounter = 0;
//     }

//     player1Choice = "";
//     player2Choice = "";
//   }
// }
