var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var positivos = 0



for( let i=0 ; i < 6; i++){
    var valor = lines.shift()
    if(valor > 0 ){
        positivos++
    }
}

console.log(positivos + " valores positivos")