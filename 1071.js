var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var one = Number(lines.shift())
var two = Number(lines.shift())

var valorSoma = 0

if( one < two) {
    for(let i = one + 1; i < two; i++){
    if ( i % 2 !== 0){valorSoma += i}
   }
}
else {
    for(let i =two + 1; i < one; i++){
    if ( i % 2 !== 0){valorSoma += i}
   }
}
console.log(valorSoma)