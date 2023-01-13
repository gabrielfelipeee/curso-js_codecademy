/*
Propriedade .length

- Uma das propriedades internas de uma array é length, que retorna o número de itens na array. Acessamos a propriedade length da mesma forma que fazemos com strings.
*/
num = [1, 2, 3, 4, 5]
console.log(num.length)





/*
Método .push()

- O método .push() permite adicionar itens ao FINAL de um array.
*/
let nomes = ['Helena', 'Maria', 'João']
nomes.push('Pedro') // pode adicionar mais elementos
console.log(nomes)




/*
Método .pop()

-  Remove o ÚLTIMO elemento de uma array, diminui o comprimento da array e retorna o valor que foi removido.

*/
let idades = [27, 20, 22, 31, 23]
idades.pop()
console.log('Sem o elemento removido: ' + idades)
/*
Você pode armazenar os valores removidos em uma variável. Ex:

let idadeRemovida = idades.pop()

console.log(idadeRemovida) // output: 23
*/




/*
Método .sort()

- Coloca os elementos em ordem CRESCENTE.
*/
idades.sort()
console.log('Ordem crescente: ' + idades)


/*
Exixte muito mais métodos:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

*/