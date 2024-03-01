var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [ID , Quantidade, Valor] = lines.shift().split(" ")
var [ID2 , Quantidade2, Valor2] =lines.shift().split(" ")

var compra1 = Quantidade * Valor
var compra2 = Quantidade2 * Valor2

var compraTotal = compra1 + compra2
console.log("VALOR A PAGAR: R$ "+ compraTotal.toFixed(2))