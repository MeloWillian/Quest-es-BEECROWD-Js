var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtt = Number(lines.shift())

for( let i = 0; i < qtt; i++){
  var numero = lines.shift()
 
  if(numero.length === 5) console.log(3)
  
  else {
    if(numero[0] == "o" && numero[1] == "n"|| 
    numero[0] == "o" && numero[2] == "e"||
    numero[1] == "n" && numero[2] == "e"){console.log(1)}
else if(numero[0] == "t" && numero[1] == "w"|| 
numero[0] == "t" && numero[2] == "o"||
numero[1] == "w" && numero[2] == "o"){console.log(2)}
  }
}