var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var lines= parseFloat(input)

if (lines >= 0 && lines <= 400) {
   var porcento = lines * 0.15
var salaryBonusAdd = lines + porcento
console.log("Novo salario: " + salaryBonusAdd.toFixed(2))
console.log("Reajuste ganho: " + porcento.toFixed(2))
console.log("Em percentual: 15 %")
}

else if (lines >= 400.01 && lines <= 800.00) {
   var porcento = lines * 0.12
var salaryBonusAdd = lines + porcento
console.log("Novo salario: " + salaryBonusAdd.toFixed(2))
console.log("Reajuste ganho: " + porcento.toFixed(2))
console.log("Em percentual: 12 %")
}

else if (lines >= 800.01 && lines <= 1200.00) {
   var porcento = lines * 0.10
var salaryBonusAdd = lines + porcento
console.log("Novo salario: " + salaryBonusAdd.toFixed(2))
console.log("Reajuste ganho: " + porcento.toFixed(2))
console.log("Em percentual: 10 %")
}

else if (lines >=1200.01 && lines <= 2000.00) {
   var porcento = lines * 0.07
var salaryBonusAdd = lines + porcento
console.log("Novo salario: " + salaryBonusAdd.toFixed(2))
console.log("Reajuste ganho: " + porcento.toFixed(2))
console.log("Em percentual: 7 %")
}

else if (lines > 2000.00 ) {
   var porcento = lines * 0.04
var salaryBonusAdd = lines + porcento
console.log("Novo salario: " + salaryBonusAdd.toFixed(2))
console.log("Reajuste ganho: " + porcento.toFixed(2))
console.log("Em percentual: 4 %")
}
