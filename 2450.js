var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 198 ; i >= 3; i -= 3 ){
    console.log(i)
}