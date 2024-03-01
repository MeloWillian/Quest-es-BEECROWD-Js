var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = Number(lines.shift())
var qnt1 = 0
var qnt2 = 0

for (let i =0 ; i < valor; i++){
  var X = Number(lines.shift())
  if (X <= 20 && X >= 10)  {qnt1++}
  else {qnt2++}
}

console.log(qnt1 + " in")
console.log(qnt2 + " out")