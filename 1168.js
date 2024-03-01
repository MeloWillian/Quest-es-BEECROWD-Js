var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function A (x) {
  let qnt = 0
  if(x == "0") qnt += 6
  else if(x == "1") qnt += 2
  else if(x == "2") qnt += 5
  else if(x == "3") qnt += 5
  else if(x == "4") qnt += 4
  else if(x == "5") qnt += 5
  else if(x == "6") qnt += 6
  else if(x == "7") qnt += 3
  else if(x == "8") qnt += 7
  else  if(x == "9") qnt += 6
  
  return qnt

}

let N = parseInt(lines.shift())
var tantativa = 0
for(let i = 1; i <= N; i++){
  var linha = lines.shift()
  var tantativa =0
  for(let l = 0; l <= linha.length-1; l++){
    
    let numero = linha.substring(l,l+1)
    let valorDeLeds = A(numero)
    tantativa += valorDeLeds
  }
  console.log(tantativa + " leds")
}