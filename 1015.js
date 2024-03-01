var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X1, Y1] = lines.shift().split(" ")
var [X2, Y2] = lines.shift().split(" ")

distancia = Math.sqrt(((X2 - X1) * (X2 - X1))  + ((Y2 - Y1) * (Y2 - Y1)))

console.log(distancia.toFixed(4))