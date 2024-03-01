class LSE {

    constructor() {
        this.cabeca = null;
    }

    inserir(valor) {
        let novoNo = new No(valor);
        //if (this.cabeca == null) {
        if (this.estahVazia()) {
            // 1ª variação - Lista vazia
            this.cabeca = novoNo;
        } else {
            // 2ª variação - Lista NÃO vazia
            let ultimoNo = this.cabeca;
            while(!ultimoNo.ehUltimo()) {
                ultimoNo = ultimoNo.prox;
            }
            ultimoNo.prox = novoNo;
        }
    }

    estahVazia() {
        return this.cabeca == null;
    }

    contagem() {
        let contador = 0;
        //if (this.cabeca == null) {
        if (this.estahVazia()) {
            // 1ª variação - Lista vazia
            return contador;
        } else {
            // 2ª variação - Lista NÃO vazia
            contador = 1;
            let ultimoNo = this.cabeca;
            while(!ultimoNo.ehUltimo()) {
                ultimoNo = ultimoNo.prox;
                contador++;
            }
            return contador;
        }
    }

    estahForaDaLista(indice) {
        return indice >= this.contagem()
    }

    indiceInvalido(indice) {
        return indice < 0
    }

    recuperacao(indice) {
        if (this.indiceInvalido(indice) || this.estahVazia() || this.estahForaDaLista(indice)) {
            // 1ª variação - Lista vazia OU índice fora da lista
            return null;
        } else {
            // 2ª variação - Lista NÃO vazia
            let indiceAtual = 0;
            let noAtual = this.cabeca;
            while(indiceAtual != indice) {
                indiceAtual++;
                noAtual = noAtual.prox;
            }
            return noAtual.valor;
        }

    }

}

class No {
    
    constructor(valor) {
        this.valor = valor;
        this.prox = null;
    }

    ehUltimo() {
        return this.prox == null;
    }

}

let Novalista = new LSE()

let  input = require('fs').readFileSync('/dev/stdin', 'utf8');
let i = input.split('\n');

for(let p of i) {
   
  if(p > 0) { Novalista.inserir(p)}
     
}

let somaIdade = 0

for(let i = 0; i < Novalista.contagem(); i++) {
  
    somaIdade += parseInt(Novalista.recuperacao(i))
  
}

let m = somaIdade/Novalista.contagem()

console.log(m.toFixed(2))