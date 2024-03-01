var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var qtt = Number(lines.shift())

for(let i = 0; i < qtt; i++){
  var N = lines.shift().split(" ")
  var A = N.shift()
  var B = N.shift()

  if (A.endsWith(B)){
    console.log("encaixa")
  }
  else console.log("nao encaixa")
}