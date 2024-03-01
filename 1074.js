var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtt = Number(lines.shift())


for(let i = 0; i < qtt; i++){
    var numero = Number(lines.shift())
    
    if(numero > 0 && numero % 2 == 0){
        console.log("EVEN POSITIVE")
    }
    else if(numero > 0 && numero % 2 != 0){
        console.log("ODD POSITIVE")
    }
    else if(numero < 0 && numero % 2 == 0){
        console.log("EVEN NEGATIVE")
    }
    else if(numero < 0 && numero % 2 != 0){
        console.log("ODD NEGATIVE")
    }
    else console.log("NULL")
}