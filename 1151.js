var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let val = Number(lines.shift())
let Q = new Array(Number((val/2)).toFixed(1))

let qtt = 0
let p = 0
let i = 2


while (qtt !== val) {

  qtt += 2
  Q[p] = i ** 2
 // console.log(i + "^2 = " + Q[p])
  i += 2
  p++
}


let op = 2
for(let  i = 0; i < Number((val/2)).toFixed(1); i++){
  console.log(op + "^2 = " + Q[i])
  op+=2
}