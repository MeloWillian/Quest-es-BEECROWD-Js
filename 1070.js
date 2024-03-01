var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = Number(input)

for (let i = 0; i < 12; i++){
  if( X % 2 != 0){console.log(X)}
  X++
}
