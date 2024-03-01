var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtt = Number(lines.shift())


for(let i = 0; i < qtt; i++){
    var valor = lines.shift().split(" ")
   var ponderada = ((Number(valor[0])*2)+ (Number(valor[1])*3)+ (Number(valor[2])*5)) / 10
    console.log(ponderada.toFixed(1))
}