/*
+> Uma declaração de função vincula uma função a um identificador.


Uma declaração de função consiste em:

- A palavra chave function.

- O nome da função, ou seu identificador, seguido de parênteses.

- Um corpo de função ou o bloco de instruções necessárias para executar uma tarefa específica, entre as chaves da função, { }.

Ex:
 */
function mensagem() {   // mensagem() é o indentificador.
    console.log('Hello, World!')
}





/*
Chamando funçoes:

- Chamada de função executa o corpo da função ou todas as instruções entre as chaves na declaração da função. Diagrama de execução da função.

- Podemos chamar a mesma função quantas vezes forem necessárias.

*/
function compra() {
    console.log('Você comprou um produto!')
}
compra(); // Chamada da função






/*
Parâmetros e Argumentos

- Os parâmetros permitem que as funções aceitem entrada(s) e executem uma tarefa usando a(s) entrada(s). Usamos parâmetros como espaços reservados para informações que serão passadas para a função quando ela for chamada.

- Ao chamar uma função que possui parâmetros, especificamos os valores entre parênteses que seguem o nome da função. Os valores que são passados ​​para a função quando ela é chamada são chamados de ARGUMENTOS. Os argumentos podem ser passados ​​para a função como valores ou variáveis.
*/
function calcularArea(largura, altura) { // altura e largura são os parâmetros.
    console.log(largura * altura)
}
//chamando a função
calcularArea(10, 10); // 10 e 10 são os argumentos.
