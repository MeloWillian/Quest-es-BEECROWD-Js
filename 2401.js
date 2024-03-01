var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let l = 1; l <= 10 ; l++){

 if(l % 2 ==0) {
  console.log("Tabuada " + l)
    
  for(let i = 1; i <= 10; i++){
   var multi = l*i
    if( i % 2 !== 0)console.log(`${l} x ${i} = ${multi}`)
  }
  console.log()
}
    }