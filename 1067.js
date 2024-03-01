var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = Number(input)
var valor = 1

if (  X <= 1000 && X >= 1 ){
while (valor <= X){
  if (valor % 2 !== 0) {console.log(valor)}
valor++
}
}