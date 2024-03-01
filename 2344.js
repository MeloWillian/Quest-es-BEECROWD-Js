var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = Number(lines.shift())
let a = new Array(5)
a[0] = "E"
a[1] = "D"
a[2] = "C"
a[3] = "B"
a[4] = "A"

if(valor ==0 ) {console.log(a[0])}
else if(valor >= 1 && valor <= 35){console.log(a[1])}
else if(valor >= 36 && valor <= 60){console.log(a[2])}
else if(valor >= 61 && valor <= 85){console.log(a[3])}
else if(valor >= 86 && valor <= 100){console.log(a[4])}
