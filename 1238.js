var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



let n = parseInt(lines.shift())

for (i= 1; i<=n;i++){
    let total = lines.shift().split(' ');
    let a = total.shift()
    
    let b = total.shift()
    
    let cont = a.length+b.length
    
    let final =''
    
    for (let l=0; l<cont;l++){
        final+= a.substring(l,l+1)+b.substring(l,l+1);
    }
    console.log(final);
}