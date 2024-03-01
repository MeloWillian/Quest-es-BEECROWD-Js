var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var Inicial = Number(lines.shift())
var Final = Number(lines.shift())

var jogo = Inicial - Final
var resultado = 24 - jogo

if(resultado >= 1 && resultado <= 24){
    console.log("O JOGO DUROU " + resultado + " HORA(S)")
   
}
else{
    var maior = Final - Inicial
    console.log("O JOGO DUROU " + maior + " HORA(S)")
}