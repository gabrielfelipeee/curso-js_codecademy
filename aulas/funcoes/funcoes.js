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





/*
Parâmetros padrão:

- Os parâmetros padrão permitem que os parâmetros tenham um valor predeterminado caso não haja nenhum argumento passado para a função ou se o argumento for undefined quando chamado.

Ex:
*/
function greeting (nome = 'usuário') { // usuário => valor padrão
    console.log(`Hello, ${nome}!`)
}
greeting(); // Hello, usuário!
greeting('Gabriel'); // Hello, Gabriel!

/*
Explicação:

No exemplo acima, usamos o = operador para atribuir ao parâmetro nome um valor padrão de 'usuário'. Isso é útil caso desejemos incluir uma saudação padrão não personalizada!

Quando o código chama, greeting('Gabriel')o valor do argumento é passado e, 'Gabriel', substituirá o parâmetro padrão de 'usuário' logar 'Hello, Gabriel!'no console.

Quando não há um argumento passado para greeting(), o valor padrão de 'usuário' é usado e 'Hello, usuário!'registrado no console.
*/