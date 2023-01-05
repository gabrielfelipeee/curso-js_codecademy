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
Funções de seta de corpo conciso:

- As funções que usam apenas um único parâmetro não precisam que esse parâmetro seja colocado entre parênteses. No entanto, se uma função tiver zero ou vários parâmetros, os parênteses serão necessários

- Um corpo de função composto por um bloco de linha única não precisa de chaves. Sem as chaves, o que quer que a linha avalie será retornado automaticamente. O conteúdo do bloco deve seguir imediatamente a seta => e a return pode ser removida. Isso é conhecido como retorno implícito .

Ex:
*/

// Se tivermos uma função:

/*
const numero = (num) => {
    return num * num;
  };

*/

  // Podemos refatorar a essa função para:

  const numero = num => num * num 


  /*
- Os parênteses ao redor num foram removidos, pois possui um único parâmetro.

- As chaves {} foram removidas, pois a função consiste em um bloco de linha única.

- A return foi removida, pois a função consiste em um bloco de linha única.
  */


// É bom estar ciente das diferenças entre expressões de função, funções de seta e declarações de função. 