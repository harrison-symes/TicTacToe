module.exports = {
  generate:generate,
  readChar:readChar,
  checkWin:checkWin
}

var winner = "_"



function generate() {
  var board = [];
  for (var i = 0; i < 3 ; i++) {
    board.push (["_", "_", "_"]);
  }
  return board;
}

function readChar(board, coords) {
  return board [coords[0]][coords[1]]
  }

function checkWin(board) {
  if (horizontalWin(board)) {
      return winner;
  }
  if (verticleWin(board)){
    return winner;
  }
  if (diagonalWin(board)){
    return winner;
  }

}

function horizontalWin(board) {
  var possibleWin ;
  for (var i = 0; i < board.length; i++) {
      possibleWin = board[i][0]
      if (board[i][1] !== possibleWin){
       continue;
      }
      if (board[i][2] == possibleWin){
        winner = possibleWin;
        return true
      }
    }
}

function verticleWin(board) {
  var possibleWin;
  for (var i = 0; i < board.length; i++) {
    possibleWin = board[0][i]
    if (board[1][i] !== possibleWin){
      continue;
    }
    if (board[2][i] == possibleWin) {
      winner = possibleWin;
      return true
    }
  }
}

function diagonalWin(board) {
  var possibleWin = board[1][1]
   possibleWin
   if (board[0][0] == possibleWin){
     if (board[2][2] == possibleWin){
       winner = possibleWin;
       return true
     }
  if (board[2][0] == possibleWin){
    if (board[0][2] == possibleWin){
      winner = possibleWin;
      return true
    }
  }
   }


}
