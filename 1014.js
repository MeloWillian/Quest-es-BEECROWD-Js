var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(item => parseFloat(item))

var A = lines.shift()
var B = lines.shift()

consumoMedio = A / B

console.log(consumoMedio.toFixed(3)+ " km/l")