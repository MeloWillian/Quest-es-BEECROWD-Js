var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = new Array(100)


for(let i = 0; i<100;i++){
  a[i] = i*7
}

for(let i= 0; i < 100;i++){
  if(i%3==0 && i % 5==0) console.log(a[i])
}
