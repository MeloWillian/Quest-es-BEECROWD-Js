var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = lines.shift()
let a = new Array(26)

let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let n = 0

for(let i of alfabeto){
 a[n] = i
  n++
}

let o = 1
for(let i of a){
if(i == valor)console.log(o)
  else o++
}