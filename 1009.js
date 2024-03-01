var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift()
var valorDoSalario = parseFloat(lines.shift())
var valorDaVenda = parseFloat(lines.shift())
var comissao =  valorDaVenda * 0.15
var SalarioFinal = valorDoSalario + comissao

console.log("TOTAL = R$ "+ SalarioFinal.toFixed(2))