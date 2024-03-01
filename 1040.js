var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N1, N2, N3, N4] = lines.shift().split(" ").map(Number)
let exame = Number(lines.shift())
var media = ((N1 * 2) + (N2  * 3) + (N3 * 4) + (N4 * 1)) / 10

console.log("Media: "+ media.toFixed(1))

if( media >= 7.0){

   console.log("Aluno aprovado.")
}

 else if(media < 5.0){
   
   console.log("Aluno reprovado.")
}

else {
     var mediaFinal = (media + exame) / 2
        console.log("Aluno em exame.")
        console.log("Nota do exame: "+ exame.toFixed(1))
        if(mediaFinal >=5){console.log("Aluno aprovado.")
        console.log("Media final: "+ mediaFinal.toFixed(1))}
         else{console.log("Aluno aprovado.")
         console.log("Media final: "+ mediaFinal.toFixed(1))}
     } 