var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C, D] = input.split(" ").map(item => parseFloat(item))
var PI = 3.14159

var triangulo = (A*C) / 2.0
var circulo =  PI * (C * C)
var trapezio = ((A + B) * C) / 2.0
var quadrado = B * B
var retangulo = A * B

console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))
 