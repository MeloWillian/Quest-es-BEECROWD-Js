var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function valor(l){
    if(l % 3 == 0 && l % 5 == 0){
    return "FizzBuzz"}

    else if (l % 3 == 0) return "Fizz"
  else if(l % 5 == 0)   return"Buzz"
  return l
}



for (let i = 1; i <= 100; i++){
  console.log(valor(i))
}