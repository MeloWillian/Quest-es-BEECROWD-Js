var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var km = lines.shift()
var minutos = km * 2
console.log(minutos + " minutos")