/*
A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

Sinatxe;

do {
   declaração
} while (condição);


Declaração:
A declaração é executada pelo menos uma vez e re-executada cada vez que a condição for avaliada como verdadeira (true). Para executar múltiplas declarações dentro do laço, use um block declaração ({ ... }) ao grupo dessas declarações.

condição:
Uma expressão é validade depois de cada passagem pelo laço. Se a condição (condition) é avaliada como verdadeira (true) o bloco de código é executado novamente. Quando a condição é avaliada como falsa (false), o controle passa para a instrução seguinte ao laço do...while.

*/
let countString = '';
let i = 0;
do {
  countString = countString + i; i++;
} while (i < 5);
console.log(countString);




/*
Obs:
 Ao contrário do while, do...while será executado pelo menos uma vez, independentemente de a condição ser ou não avaliada como true.

 Ex:
 */
let quantidade = 10;
let necessario = 0;
do {
    necessario ++
} while (necessario === quantidade) // false
console.log(necessario)  // print: 1