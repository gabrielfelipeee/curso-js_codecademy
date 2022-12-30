/*
Avaliações verdadeiras e falsas abrem um mundo de possibilidades abreviadas!

- Digamos que você tenha um site e queira usar o nome de usuário para fazer uma saudação personalizada. Às vezes, o usuário não possui uma conta, tornando a username variável false.

Obs: variáveis com valor false são:
0;
Strings vazias como "" ou '';
null que representam quando não há valor algum;
undefined que representam quando uma variável declarada não possui um valor;
NaN, ou não é um número.


Primeiro ele verifica a condição do lado esquerdo. Se for false, ele retorna o valor do lado direito.

Ex:
*/
let nome = ''
let nomePadrao = nome || 'Fulano'  
console.log(`Seja bem-vindo ${nomePadrao}!`)
// Seja bem-vindo Fulano!



let animal = 'Leão.'
let animalPadrao = animal || 'Gato.'
console.log(`Animal: ${animalPadrao}`)
// Animal: Leão.





// Ex . de variável com valor false

let num = 0
if (num) { // if só vai ser executado se a condição for true.
    console.log('True')
} else {
    console.log('False')
}