var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = lines.shift()
let valor = numero.split(" ")

let x = Number(valor.shift())
let y = Number(valor.shift())


while (x !== 0 && y !== 0) {
  if( x > 0 && y > 0){console.log("primeiro")}
  if( x < 0 && y > 0){console.log("segundo")}
  if( x < 0 && y < 0){console.log("terceiro")}
  if( x > 0 && y < 0){console.log("quarto")}
 
   numero = lines.shift()
  valor = numero.split(" ")

     x = Number(valor.shift())
    y = Number(valor.shift())
}