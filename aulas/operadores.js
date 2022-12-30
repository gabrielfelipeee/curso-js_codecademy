// O resultado sempre vai ser um valor boolean.

/*
OPERADORES DE COMPARAÇÃO:

Menor que: <
Maior que: >
Menos que OU igual a: <=
Maior que OU igual a: >=       
É igual a: ===
Não é igual a: !==

Ex:
*/
let num = 10
if (num > 15) {
    console.log('Sim')
} else {
    console.log('Não')
}



/*
OPERADORES LÓGICOS:

! => não/bang > NEGAÇÃO 
&& => e > CONJUNÇÃO
|| => ou > DISJUNÇÃO

Ex:
*/
let comer = true
console.log(!comer) // Retorna false, pois ! inverte/nega o valor da variável.

let andar = false
console.log(!andar) // Retorna true



let players = 23
let  games = 8

if (players === 23 && games != 5) { // Ambas precisam ser true para executar if
    console.log('Sim')
} else {
    console.log('Não')
}



if (players === 20 || games < 10) {
    console.log ('Yes')
} else {
    console.log('No')
}