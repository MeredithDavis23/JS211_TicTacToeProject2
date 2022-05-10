
let currentMarker = 'X'
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];



const displayPlayers = () => {
  let playerOne = document.getElementById("playerOne").value;
  let playerTwo = document.getElementById("playerTwo").value;
  playerOne = playerOne.trim();
  playerTwo = playerTwo.trim();
  document.getElementById("player-names").innerHTML = playerOne + " vs. " + playerTwo;
  return playerOne + "vs." + playerTwo;
}


const handleClick = (element) => {
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    updateBoard(element.id)
    checkForWin()
  }
}

const addMarker = (id) => {
  console.log(`We'll place a mark on square: ${id}`)
  console.log(id);
  document.getElementById(id).innerHTML = currentMarker
}


const updateBoard = (id) => {

  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2)) 

  console.log(`you clicked the sq at ${row} and ${column}`)
  console.log(board)
  board[row][column] = currentMarker 
  if (document.getElementById(id).innerHTML == "") {
    addMarker(id);
  }
  
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
    resetBoard();
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  console.log ("horizontalWin");
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"))  {return true}; 
  if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"))  {return true};
  if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"))  {return true};
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"))
    {return true};
  if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"))  {return true};
  if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))  {return true};
 }

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"))  {return true};
  if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"))  {return true};
}

const changeMarker = () => {
  currentMarker = currentMarker === "X" ? "O" : "X"
}

const resetBoard = () => {
  console.log("the board was cleared!")
 
  const squares = document.getElementsByTagName("TD")
  
  for (i=0; i<squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
  
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
}

