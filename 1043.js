var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

if((A + B) > C && (A + C) > B && (B + C) > A){
    var perimetro = A + B + C
    console.log("Perimetro = "+ perimetro.toFixed(1))
}
else {
    var area = ((A + B) * C) / 2
    console.log("Area = "+ area.toFixed(1))
}