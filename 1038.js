var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var one = lines.shift()
var two = lines.shift()

 if (one == 1){
    var valor1 = (two * 4.00).toFixed(2)
 console.log("Total: R$ " + valor1)
}

else if (one == 2){
    var valor2 = (two * 4.50).toFixed(2)
 console.log("Total: R$ " + valor2)
}
else if (one == 3){
    var valor3 = (two * 5.00).toFixed(2)
 console.log("Total: R$ " + valor3)
}
else if (one == 4){
    var valor4 = (two * 2.00).toFixed(2)
 console.log("Total: R$ " + valor4)
}
else if (one == 5){
    var valor5 = (two * 1.50).toFixed(2)
 console.log("Total: R$ " + valor5)
}