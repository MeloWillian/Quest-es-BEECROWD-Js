var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(" ").map(item => parseInt(item))

var FORMULA = (A+B+Math.abs(A - B)) /2
var FORMULA2 = (C + FORMULA+Math.abs(C - FORMULA)) /2

console.log(FORMULA2 + " eh o maior")