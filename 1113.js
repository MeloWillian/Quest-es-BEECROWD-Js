var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines != 0){
    
    var numero = lines.shift().split(" ")
    var one = Number(numero.shift())
var two = Number(numero.shift())
    
    if(one !== two){
    if(one > two)console.log("Decrescente")
else if(one < two)console.log("Crescente")
} 

}