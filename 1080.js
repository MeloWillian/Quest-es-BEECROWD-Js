var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = 0
var Nplus = 1

var y;

for(let i = 1; i <= 100; i++){
  y =Number(lines.shift())
  
  if( i == 1){
    N = y
    Nplus = 1
  }
  else if( y > N){
    N = y
    Nplus = i
  }
}

console.log(N)
console.log(Nplus)