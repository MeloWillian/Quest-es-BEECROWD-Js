var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = Number(input)

for (let i = 1; i <= 10; i++){
var mult = i * N
    console.log(`${i} x ${N} = ${mult}`)
}