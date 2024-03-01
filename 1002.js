var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(input)
var PI = 3.14159
var area = PI * (R * R)

console.log("A="+ area.toFixed(4))