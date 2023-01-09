/*
Array:

- Arrays são listas de dados ordenados e armazenados. Eles podem conter itens que são de qualquer tipo de dados. Cria-se uma array colocando itens entre colchetes [].

- Arrays podem ser criados usando colchetes, com elementos individuais separados por vírgulas.

- Cada item de conteúdo dentro de uma matriz é chamado de elemento.

- Uma array pode ser armazenada dentro de uma variável.

Ex:
*/
let numeros = [1, 2, 3, 4, 5] // Array só com números.

let array = [true, 'Maria', 15] // Array com diferentes elementos.




/*
Acessar elementos de uma array:

- Cada elemento em um array tem uma posição numerada conhecida como seu ÌNDICE. Podemos acessar itens individuais usando seu índice, que é semelhante a referenciar um item em uma lista com base na posição do item.

- Arrays em JavaScript são indexados por zero , o que significa que as posições começam a contar em 0 vez de 1. Portanto, o primeiro item em uma matriz estará na posição 0.

Ex:
*/
cidades = ['São Paulo', 'Rio de Janeiro', 'Vitória', 'Campinas', 'Londres']
// Índice:         0              1               2          3           4
console.log(cidades[2])


let clubesFutebol = ['Liverpool', 'Barcelona', 'Man United', 'Juventus']
let maiorClube = clubesFutebol[0]
console.log(maiorClube)

// Ee tentar acessar um índice que está além do último elemento, vai retornar undefined.
console.log(clubesFutebol[4])


// Você também pode acessar caracteres individuais em uma string usando a notação de colchetes e o índice. Por exemplo:
let pais = 'Brasil'
console.log(pais[2])






// Atualizando elementos
let paises = ['Espanha', 'Países Baixos', 'Alemanha', 'Estados Unidos', 'Japão', '']
paises[5] = 'Brasil'
console.log(paises)

paises[0] = 'Argentina'
console.log(paises)


/*
Arrays com let e const:

- As variáveis ​​declaradas com a palavra-chave const não podem ser reatribuídas. No entanto, os elementos em uma array declarada com const permanecem mutáveis. O que significa que podemos alterar o conteúdo de um const array, mas não podemos reatribuir um novo array ou um valor diferente.

*/
// Com let
let comidas = ['Pizza', 'Lasanha', 'Arroz']
comidas[1] = 'Torta'         
console.log(comidas)


// Com const
const bebidas = ['Vinho', 'Refrigerante', 'Cerveja']
bebidas[1] = 'Café'
console.log(bebidas)