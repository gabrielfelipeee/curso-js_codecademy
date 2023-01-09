/* Arrays e funções:

- Quando você passa um array para uma função, se o array sofrer mutação dentro da função, essa alteração também será mantida fora da função.

Ex:
*/
let animais = ['leão', 'gato', 'tigre']

function adiAnimais(add) {
    add.push('leopardo')
}
adiAnimais(animais);

console.log(animais) // Array foi mudada

/*
Explicação:

- A array animais tem 3 elementos.

- A função adiAnimais() tem um parâmetro add usando o método .push() para adicionar o elemento 'leopardo' em add.

- Chamamos adiAnimais() com um argumento animais que executará o código dentro adiAnimais.

- Verificamos o valor de animais se agora inclui o elemento 'leopardo'. A array foi mutada!
*/

// Outro ex:

let numeros = [25, 30, 45, 12, 14]

function mudarNum(mudar) {
    mudar[2] = (100) // Mudei o 3° elemento para 100
}
mudarNum(numeros)
console.log(numeros)