/*
A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

Quando usar while: 
O loop while é ideal quando não sabemos antecipadamente quantas vezes o loop deve ser executado. Em situações em que queremos que um loop execute um número indeterminado de vezes, os loops while são a melhor escolha.


Sintaxe:

while (condição) {
  rotina
}

Condição:
    Uma expressão avaliada antes de cada passagem através do laço. Se essa condição for avaliada como verdadeira, a rotina é executada. Quando a condição for avaliada como falsa, a execução continua na declaração depois do laço while.

Rotina:
   Uma declaração que é executada enquanto a condição é avaliada como verdadeira.
*/
// Loop usando for

for (let contador = 1; contador < 5; contador ++) {
    console.log(contador);
}

// Convertendo for para while
let contador = 1;
while (contador < 5) {
    console.log(contador);
    contador ++;
}

/*
Explicação:

-A variável contador é declarada antes do loop. Podemos acessá-lo dentro de nosso loop while, pois está no escopo global.

- Iniciamos nosso loop com a palavra-chave while seguida por nossa condição de parada ou condição de teste. Isso será avaliado antes de cada rodada do loop. Enquanto a condição for avaliada como true, o bloco continuará em execução. Assim que for avaliado, false o loop irá parar.

- Em seguida, temos o bloco de código do nosso loop que imprime contador no console e incrementa contador.
*/