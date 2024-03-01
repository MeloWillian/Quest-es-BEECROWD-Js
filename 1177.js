var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = Number(lines.shift())
let a = new Array(1000)

let b = 0

while(b <= 1000){

  for(let i = 0; i<valor;i++){
    a[b] = i
    b++
  }
  
  
}

for(let i=0; i < 1000;i++){
  console.log("N["+i+"] = "+ a[i])
}