var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var horaInicial = Number(lines.shift())
var minutoInicial = Number(lines.shift())
var horaFinal = Number(lines.shift())
var minutoFinal = Number(lines.shift())

var jogoHora = horaFinal - horaInicial
var jogoMinuto = minutoFinal - minutoInicial


if(jogoMinuto < 0){
    jogoHora--
    jogoMinuto += 60
}

if (jogoHora < 0){
    jogoHora += 24
}
if(jogoHora == 0 && jogoMinuto == 0){
    jogoHora += 24
}

console.log(`O JOGO DUROU ${jogoHora} HORA(S) E ${jogoMinuto} MINUTO(S)`)