var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines.shift()
let primeiro; 
let segundo;
for (let i = 0; i < linha; i++) {
  
  
    let valor =  lines.shift().split(' ');
  primeiro = valor.shift();
  segundo = valor.shift();
  
  
  
  if (primeiro === "spock" && segundo === "tesoura" ||  primeiro === "spock" && segundo === "pedra") {
    console.log('rajesh');
  } 
  else if (primeiro === "papel" && segundo === "spock" ||  primeiro === "papel" && segundo === "pedra") {
    console.log('rajesh');
  } 
  else if (primeiro === "pedra" && segundo === "tesoura" ||  primeiro === "pedra" && segundo === "lagarto") {
    console.log('rajesh');
  }  
  else if (primeiro === "tesoura" && segundo === "papel" ||  primeiro === "tesoura" && segundo === "lagarto") {
    console.log('rajesh');
  }  
  else if (primeiro === "lagarto" && segundo === "papel" ||  primeiro === "lagarto" && segundo === "spock") {
    console.log('rajesh');
  }   
  else if (segundo === "spock" && primeiro === "tesoura" ||  segundo === "spock" && primeiro === "pedra") {
    console.log('sheldon');
  } 
  else if (segundo === "papel" && primeiro === "spock" ||  segundo === "papel" && primeiro === "pedra") {
    console.log('sheldon');
  } 
  else if (segundo === "pedra" && primeiro === "tesoura" ||  segundo === "pedra" && primeiro === "lagarto") {
    console.log('sheldon');
  }  
  else if (segundo === "tesoura" && primeiro === "papel" ||  segundo === "tesoura" && primeiro === "lagarto") {
    console.log('sheldon');
  }  
  else if (primeiro === segundo) {
    console.log('empate');
  } 
  else {console.log('sheldon')}
} 