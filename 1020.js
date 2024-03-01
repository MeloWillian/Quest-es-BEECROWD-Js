var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(input)

var ano = parseInt(dias / 365)
dias = dias % 365

var mes = parseInt(dias / 30)
dias = dias % 30

console.log(ano.toFixed(0) + " ano(s)")
console.log(mes.toFixed(0) + " mes(es)")
console.log(dias.toFixed(0) + " dia(s)")