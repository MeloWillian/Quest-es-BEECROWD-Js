var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var valor1 = lines.shift().split(" ")

var numero1 = Number(valor1.shift())
var numero2 = Number(valor1.shift())

while(numero1 !== 0 && numero2 !== 0){
   let zero =""
    let soma = (numero1+numero2)+""
  for(let n of soma){
    if(n !== "0") zero += n
    }

    console.log(zero)
    valor1 = lines.shift().split(" ")
    numero1 = Number(valor1.shift())
    numero2 = Number(valor1.shift())
    
}