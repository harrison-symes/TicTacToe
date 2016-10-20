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
}

function horizontalWin(board) {
  var possibleWin ;
  for (var i = 0; i < board.length; i++) {
      possibleWin= board[i][0]
      if (board[i][1] !== possibleWin){
       continue;
      }
      if (board[i][2] == possibleWin){
        winner = possibleWin;
        return true
      }

    }
}
