var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i=1; i<=100;i++){
    if(i % 3 == 0 ) console.log("Fizz")
    else console.log(i)
}