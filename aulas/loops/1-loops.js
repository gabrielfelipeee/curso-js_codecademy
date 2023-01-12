// Porque usar loops: Imagine que esse array tenha 100 elementos, registrar manualmente cada elemento do array no console seria uma tarefa tediosa!, para isso existe o loops.
let estadios = ['Anfield', 'Camp Nou', 'Maracanã'];
console.log(estadios[0]);
console.log(estadios[1]);
console.log(estadios[2]);





/*
Loops:
- Um loop é uma ferramenta de programação que repete um conjunto de instruções até que uma condição especificada, chamada de condição de parada, seja alcançada.

- Os loops iteram ou repetem uma ação até que uma condição específica seja atendida. Quando a condição é atendida, o loop para e o computador passa para a próxima parte do programa.

- Os loops nos permitem criar código eficiente que automatiza processos para criar programas escaláveis ​​e gerenciáveis.





                                        for

- A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

1° expressão: uma inicialização inicia o loop e também pode ser usada para declarar a variável do iterador.

2° expressão: uma condição de parada é a condição com a qual a variável do iterador é avaliada — se a condição for avaliada como true o bloco de código será executado e se for avaliada como false o código será interrompido.

3° expressão: Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.

- Declaração: Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco ({...}) para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia (;).


Sintaxe:
for (inicialização; condição; expressão final)
   declaração


Ex:
*/
for (let contador = 0; contador < 6; contador ++) {
   console.log(contador) // 0 1 2 3 4 5
}

/*
Explicação:
- A inicialização é let contador = 0;, então o loop começará a contar em 0.

- A condição de parada é contador < 6, o que significa que o loop será executado enquanto a variável do iterador (expressão final), contador, for menor que 6.

- A instrução de iteração é contador++. Isso significa que após cada loop, o valor de contador aumentará em 1. Para a primeira iteração contador será igual a 0, para a segunda iteração contador será igual a 1 e assim por diante.

- O bloco de código está dentro das chaves, console.log(contador), será executado até que a condição seja avaliada como false. A condição será falsa quando contador for maior ou igual a 6 — o ponto em que a condição se torna falsa às vezes é chamado de condição de parada.
*/


// Contar ao contrário

for (let ContarContrario = 5; ContarContrario >= 0; ContarContrario --) {
   console.log(ContarContrario)
}