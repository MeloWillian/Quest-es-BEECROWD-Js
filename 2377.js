var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let l = 1; l <= 10 ; l++){
  
console.log("Tabuada " + l)
  
for(let i = 1; i <= 10; i++){
 var multi = l*i
  console.log(`${l} x ${i} = ${multi}`)
}
console.log(" ")
  }