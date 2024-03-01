var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var one = Number(lines.shift())
var two = Number(lines.shift())

if( two % one === 0){
   console.log("Sao Multiplos")
} else if (one % two === 0) {
    console.log("Sao Multiplos")
} else{
   console.log("Nao sao Multiplos")
}