// Os operadores ternários podem ser usados ​​para condições avaliadas como true ou false.


let jogar = true
jogar ? console.log('Vou jogar!') : console.log('Não vou jogar!');



/*
Explicação:

- A condição, jogar, é fornecida antes do ?.
- Duas expressões seguem o ?, e são separadas por dois pontos :.
- Se a condição for avaliada como true, a primeira expressão será executada.
- Se a condição for avaliada como false, a segunda expressão será executada.

*/

// Outros ex.

let n = 16
n === 15 ? console.log('Verdadeiro') : console.log('Falso')

//-----------------------------

let nomeUsuario = prompt('Qual seu nome?')
let nomePadrao = 'Fulano'
let identificacao = nomeUsuario ? nomeUsuario : nomePadrao;

alert(`Olá ${identificacao}! seja bem-vindo!`);