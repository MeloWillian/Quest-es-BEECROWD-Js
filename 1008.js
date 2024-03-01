var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift()
var B = lines.shift()
var C = lines.shift()
SALARY = B*C
console.log("NUMBER = "+ A)
console.log("SALARY = U$ "+ SALARY.toFixed(2))