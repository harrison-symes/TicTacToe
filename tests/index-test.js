var test = require('tape');
var TTT = require('../');

test('test harness', function(t) {
  t.pass();
  t.end();
})

test('generate a 3 by 3 empty grid', function(t) {
  var expected = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
  ];

  var actual = TTT.generate();

  t.deepEqual(actual, expected, "creates and 'empty' 3x3 grid");
  t.end();
})

test ('read character', function(t) {
  var expected = "X"
  var coords = [1,1]
  var board = [
    ["_", "_", "_"],
    ["_", "X", "_"],
    ["_", "_", "_"]
  ];

  var actual = TTT.readChar(board, coords);

  t.equal(actual, expected, "Found X at center");
  t.end();
})

test ('check horizontal win', function(t) {
  var expected = "X"
  var board =   [
    ["X", "X", "X"],
    ["_", "_", "_"],
    ["_", "_", "_"]
  ];

   var actual = TTT.checkWin(board);

   t.equal(actual, expected, "X wins!!- horizontal")
   t.end()

})

test ('check verticle win', function(t) {
  var expected = "0"
  var board =   [
    ["0", "_", "_"],
    ["0", "_", "_"],
    ["0", "_", "_"]
  ];

   var actual = TTT.checkWin(board);

   t.equal(actual, expected, "0 wins!!- verticle")
   t.end()

})

test ('check diagonal win', function(t) {
  var expected = "X"
  var board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["_", "_", "X"]
  ];

  var actual = TTT.checkWin(board);

  t.equal(actual, expected, "X wins!!- diagonal")
  t.end()
})
