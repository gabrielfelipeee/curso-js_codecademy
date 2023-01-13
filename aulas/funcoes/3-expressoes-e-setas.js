/*
Expressões de funções

Para declarar uma expressão de função:

- Declare uma variável para fazer com que o NOME da variável seja o NOME ou IDENTIFICADOR de sua função. Desde o lançamento do ES6, é prática comum usar const como palavra-chave para declarar a variável.

- Atribua como valor dessa variável uma função anônima criada usando a palavra-chave function seguida de um conjunto de parênteses com possíveis parâmetros. Em seguida, um conjunto de chaves que contém o corpo da função.

"Uma função sem nome é chamada de função anônima"


Ex:
*/
const divisao = function(n, n2) {
    let res = n - n2
    return res
}
console.log(divisao(5, 3))



// Outro ex: Digamos que temos uma planta que precisamos regar uma vez por semana aos sábados.

const diaSemana = function(dia) {
    if (dia === 'Sábado') {
        return 'Dia de regar as plantas!'
    } else {
        return 'Não regas as plantas!'
    }
}

console.log(diaSemana('Sábado'))



/*
Funções de seta:

- As funções de seta eliminam a necessidade de digitar a palavra-chave function toda vez que você precisa criar uma função. Em vez disso, você primeiro inclui os parâmetros dentro de () e, em seguida, adiciona uma seta => que aponta para o corpo da função cercado por {}.

Ex:
*/

const calcularArea = (largura, altura) => {
    let area = largura * altura
    return area
}

console.log(calcularArea(5, 5))




/*
Funções de seta:

As expressões de função de seta foram introduzidas no ES6. Essas expressões são limpas e concisas. A sintaxe para uma expressão de função de seta não requer a palavra-chave function e usa uma seta => para separar o(s) parâmetro(s) do corpo.

Ex:
*/
/* Se tivermos uma função:

const numero = (num) => {
    return num * num;
  };

  Podemos refatorar a essa função para:
*/
  const numero = num => num * num 



  /*
  Existem diversas variações de funções de seta:

 - As funções de seta com um único parâmetro não exigem () a lista de parâmetros.

 Ex:
  */
 // Função de seta sem parâmetro
 const saudacao = () => {
  return 'Hello, World!'
 }

 // Com um único parâmetro
 const verificarPeso = peso => { // () no parâmetro arguumento opcional
  return `O peso da sua bagagem é ${peso} kg.`
 }
 console.log(verificarPeso(50))

 // Com dois parâmetros
 const somar = (n, n2) => {
  return  n + n2
 }
 console.log(somar(10, 2))

 //



 /*
 Funçoẽs de seta concisa:
 
  - As funções de seta com uma única expressão podem usar o corpo da função concisa que retorna o resultado da expressão sem a palavra-chave return.
 */
const multiplicacao = (x, y) => x * y
console.log(multiplicacao(10, 10))