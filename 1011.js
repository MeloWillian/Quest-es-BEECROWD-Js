var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = lines.shift()
var PI = 3.14159
var formula  = (4/3) * PI * (R*R*R)

console.log("VOLUME = "+ formula.toFixed(3))