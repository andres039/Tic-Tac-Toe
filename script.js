"use strict;";
/*
There will be two arrays that are keeping track of the squares that have been clicked. Each square will have an id, therefore each id will be push in to the array. One array for one player and the other array for the other player. Right after the number is pushed into the array, we need to check weather the array includes all the numbers of a winning sequence. Therefore we need to create an array of winning sequences. After the check is run, we determine if we keep playing or we end the game, this last option has two possibilities: if somebody has won the game, or if all the squares are full. 
[x] Create array of winning possibilities
[x] Create arrays for each player (factory function?)
[x]Create function takes a number and decides where it should be applied.
[x] This function checks if any of the winning sequences !includes! the numbers of the players array.

Does the playerSelections array includes all of the 
 If the complete triad is there, the weHaveWinner =  true else = false
   - If so, game is over and one player won
   - If not, continue playing, unless 9 spaces have been filled. That's a tie.
*/
let endGame = false;
function gameFlow(number) {
  if (playerX.playerSelections.length + playerY.playerSelections.length >= 9) {
    endGame === true;
    console.log("tie!");
  } else {
    let winnerMark = [];
    endGame === false
      ? playerX.playerSelections.length === 0
        ? playerX.markTheBoard(number) && checkWinner(playerX)
        : playerX.playerSelections.length > playerY.playerSelections.length
        ? playerY.markTheBoard(number) && checkWinner(playerY)
        : playerX.markTheBoard(number) && checkWinner(playerX)
      : console.log("The end");
    function checkWinner(player) {
      //compare the playerSelections array with the win combos
      winCombos.forEach((triad) => {
        if (triad.every((v) => player.playerSelections.includes(v))) {
          winnerMark.push("👯‍♂️");
        }
        winnerMark.length > 0 ? (endGame = true) : (endGame = false);
      });
      endGame === true
        ? console.log(`${player.playersName} wins!!!`)
        : console.log("keep playing!");
    }
  }
}
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
const createPlayer = (name) => {
  //choice is a number
  const playersName = name;
  let playerSelections = [];
  function markTheBoard(choice) {
    playerSelections.push(choice);
    return playerSelections;
  }
  return {
    playerSelections,
    markTheBoard,
    playersName,
  };
};
const playerX = createPlayer("playerX");
const playerY = createPlayer("playerY");


console.log(playerX.playerSelections);

const gameBoard = (() => {
    const grid = document.querySelector('.grid')
    const makeTiles = () => {
        for (let i = 0; i < 9; i++) {
    const tiles = document.createElement('div')
    tiles.setAttribute('class', 'tiles')
    grid.appendChild(tiles)
    }
    return grid
}
    return {makeTiles}
}) ()
gameBoard.makeTiles()
let eachone = document.querySelectorAll('.tiles')
let tilesArray = [...eachone]
let num = 0
tilesArray.forEach(e => {
    e.setAttribute('id', `${num}`)
    num += 1
})
let tile0 = document.getElementById('0')
tile0.addEventListener('click', () => gameFlow(0))
let tile1 = document.getElementById('1')
tile1.addEventListener('click', () => gameFlow(1))
let tile2 = document.getElementById('2')
tile2.addEventListener('click', () => gameFlow(2))
let tile3 = document.getElementById('3')
tile3.addEventListener('click', () => gameFlow(3))
let tile4 = document.getElementById('4')
tile4.addEventListener('click', () => gameFlow(4))
let tile5 = document.getElementById('5')
tile5.addEventListener('click', () => gameFlow(5))
let tile6 = document.getElementById('6')
tile6.addEventListener('click', () => gameFlow(6))
let tile7 = document.getElementById('7')
tile7.addEventListener('click', () => gameFlow(7))
let tile8 = document.getElementById('8')
tile8.addEventListener('click', () => gameFlow(8))