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
