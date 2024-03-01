var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var qtt = Number(lines.shift())

var Rato = 0
var Sapo = 0
var Coelho = 0

var valorCobaias = 0

for(let i = 0; i < qtt; i++){
    var linha = lines.shift().split(" ")
    var numero = Number(linha.shift())
    var Letra = linha.shift()
    
    valorCobaias += numero
        
    if(Letra == "R"){Rato += numero}
    else if (Letra == "S"){Sapo += numero}
    else if (Letra == "C"){Coelho += numero}
}


var percentualC = (Coelho/valorCobaias)*100
var percentualR = (Rato/valorCobaias)*100
var percentualS = (Sapo/valorCobaias)*100

console.log(`Total: ${valorCobaias} cobaias`)
console.log(`Total de coelhos: ${Coelho}`)
console.log(`Total de ratos: ${Rato}`)
console.log(`Total de sapos: ${Sapo}`)


console.log(`Percentual de coelhos: ${percentualC.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percentualR.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percentualS.toFixed(2)} %`)