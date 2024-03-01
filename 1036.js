var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())


let delta = (B * B) - (4 * A * C)
let deltaComRaiz = Math.sqrt(delta)

var equação1 =  ((-1 * B)+ deltaComRaiz) / (2 * A)
var equação2 =  ((-1 * B)- deltaComRaiz) / (2 * A)

if (deltaComRaiz >= 0 && A != 0) {
    console.log("R1 = "+ equação1.toFixed(5))
    console.log("R2 = "+ equação2.toFixed(5))
}
else{
    console.log("Impossivel calcular")
}