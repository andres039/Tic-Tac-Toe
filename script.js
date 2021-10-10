"use strict";

/*
There will be two arrays that are keeping track of the squares that have been clicked. One array for one player and the other array for the other player. Each square will have a numeric id, therefore each id value will be pushed into the array.  Right after the number is pushed into the array, we need to check weather the array includes all the numbers of a winning sequence. Therefore we need to create an array of winning sequences. After the check is run, we determine if we keep playing or we end the game, this last option has two possibilities: if somebody has won the game, or if all the squares are full. 
[x] Create array of winning possibilities
[x] Create arrays for each player (factory function?)
[x]Create function takes a number and decides where it should be applied.
[x] This function checks if any of the winning sequences !includes! the numbers of the players array.

Does the playerSelections array includes all of the 
 If the complete triad is there, the weHaveWinner =  true else = false
 - If so, game is over and one player won
 - If not, continue playing, unless 9 spaces have been filled. That's a tie.
 */
const grid = document.querySelector('.grid')
let allTheSelections = []
let endGame = false;

const createPlayer = (name, figure) => {
  //choice is a number
  const playersName = name;
  const figures = figure;
  let playerSelections = [];
  //grid.addEventListener('click', (e) => e.target.innerText = figures)
  function markTheBoard(choice) {
    checkSelections()
    if (allTheSelections.includes(choice)) {
    } else {
    playerSelections.push(choice);
    let currentTile = document.getElementById(`${choice}`)
    currentTile.innerText = figures;
  }
}
  return {
    playerSelections,
    markTheBoard,
    playersName,
    figures
  };
}

const playerX = createPlayer("playerX", 'x');
const playerY = createPlayer("playerY", 'o');
function gameFlow(number) {
  checkSelections()
  if (allTheSelections.forEach(num => num === number)) {
} else {
  if (endGame === true) {console.log('Game over')} else {
  if (playerX.playerSelections.length + playerY.playerSelections.length >= 8) {
    endGame = true;
    console.log("tie!");
  }
  else if (playerX.playerSelections.length === 0) {
        playerX.markTheBoard(number);
        console.log(playerX.playerSelections)
      }
      else if (playerX.playerSelections.length > playerY.playerSelections.length) {
        playerY.markTheBoard(number);
        checkWinner(playerY);
      }
       else {
         playerX.markTheBoard(number);
         checkWinner(playerX);
         console.log(playerX.playerSelections)
       }
      }
    }
    }
    
    function checkWinner(player) {
      winCombos.forEach((triad) => {
        if (triad.every(v => player.playerSelections.includes(v))) {
          endGame = true;
        }
      });
      return endGame === true ? console.log(`${player.playersName} wins!!!`) : console.log('keep playing')
      
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


grid.addEventListener('click', e => gameFlow(+e.target.id))

function checkSelections(number) {
  playerX.playerSelections.forEach(num => allTheSelections.push(num))
  playerY.playerSelections.forEach(num => allTheSelections.push(num))
};