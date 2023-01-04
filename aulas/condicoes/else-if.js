/*

if => se


- Dentro dos parênteses (), é fornecida uma condição avaliada como trueou false.

- Se a condição for avaliada como true, o código dentro das chaves será {}executado ou será executado .

- Se a condição for avaliada como false, o bloco não será executado.

Ex:
*/

let caminhar = true
if (caminhar) {
    console.log('Vamos caminhar!')
}


/*

else => se não


- Use else após o bloco de código de uma ifinstrução if.
- O código dentro do bloco de else será executado quando a condição if da instrução for avaliada como false.

Ex:
*/

var jogarFut = false
if (jogarFut) {
    console.log('Vamos jogar!')
} else {
    console.log('Não vamos jogar!')
}




/*

else if =>


- A declaração else if permite mais de dois resultados possíveis. Você pode adicionar quantas else if quiser, para fazer condicionais mais complexas.

- A else if sempre vem depois de if.

Ex:
*/

let cor = 'Preto'

if (cor === 'azul') {
    console.log('O carro é azul!')
} else if (cor === 'verde') {
    console.log('O carro é verde!')
} else if (cor === 'preto') {
    console.log('O carro é preto!')
} else if (cor === 'branco') {
    console.log('O carro é branco!')
} else {
    console.log('Carro desconhecido!')
}