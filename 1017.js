var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempoEmHoras = parseInt(lines.shift())
var Vm = parseInt(lines.shift())

var Distancia =Vm * tempoEmHoras
var QuantidadeDeLitros = Distancia / 12
console.log(QuantidadeDeLitros.toFixed(3))