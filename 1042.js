var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var valor1 = Number(lines.shift())
var valor2 = Number(lines.shift())
var valor3 = Number(lines.shift())

if (valor1 > valor2 && valor2 > valor3){
    console.log(valor3)
    console.log(valor2)
    console.log(valor1)
    console.log()
console.log(valor1)
console.log(valor2)
console.log(valor3)
}
else if(valor1 > valor3 && valor3 > valor2){
    console.log(valor2)
    console.log(valor3)
    console.log(valor1)
    console.log()
console.log(valor1)
console.log(valor2)
console.log(valor3)
}
else if (valor2 > valor3 && valor3 > valor1){
    console.log(valor1)
    console.log(valor3)
    console.log(valor2)
    console.log()
console.log(valor1)
console.log(valor2)
console.log(valor3)
}
 else if (valor2 > valor1 && valor1 > valor3){
    console.log(valor3)
    console.log(valor1)
    console.log(valor2)
    console.log()
    console.log(valor1)
    console.log(valor2)
    console.log(valor3)
 }
 
 else if (valor3 > valor2 && valor2 > valor1){
    console.log(valor1)
    console.log(valor2)
    console.log(valor3)
    console.log()
   console.log(valor1)
   console.log(valor2)
   console.log(valor3)
}
 
else if (valor3 > valor1 && valor1 > valor2){
    console.log(valor2)
    console.log(valor1)
    console.log(valor3)
    console.log()
    console.log(valor1)
    console.log(valor2)
    console.log(valor3)
}
