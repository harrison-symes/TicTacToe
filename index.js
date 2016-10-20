module.exports = {
  generate:generate
}

function generate() {
  var board = [];
  for (var i = 0; i < 3 ; i++) {
    board.push (["_", "_", "_"]);
  }
  return board;
}
