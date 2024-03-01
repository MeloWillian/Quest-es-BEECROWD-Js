var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var positivos = 0
var inicial = 0
 
for( let i = 0 ; i < 6; i++){
    var valor = parseFloat(lines.shift())
    if(valor > 0 ){
      positivos++
        inicial += valor
    }
    var media = inicial / positivos
}
console.log(positivos + " valores positivos")
console.log(media.toFixed(1))