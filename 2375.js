var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function valor(l){
  if(l%2 == 0) return " Par"
  else return " Ímpar"
}


for(let i = 3 ; i <= 200; i += 3 ){
    console.log((201 - i) + valor(201 - i) )
}