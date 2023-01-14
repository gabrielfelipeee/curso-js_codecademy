/*
Loop aninhado:
É um loop rodando dentro de outro loop, chamamos isso de loop aninhado

- Um uso para um loop aninhado for é comparar os elementos em duas array. Para cada rodada do for externo, o loop interno for será executado completamente.
*/

// verificar se elementos de uma array são iguais, e depois adicionar a uma vazia, usando loops aninhados.

// Times ingleses que já foram campeões da UCL e UEL.
let campeaoUCL = ["Liverpool", "Aston Villa", "Man United", "Nottingham Forest", "Chelsea"];
let campeaoUEL = ["Liverpool", "Tottenham", "Man United", "Ipswich Town", "Man city", "Chelsea"];
let campeaoAmbas = [];
for (let i = 0; i < campeaoUCL.length; i ++) {
    for (let j = 0; j < campeaoUEL.length; j ++) {
        if (campeaoUCL[i] === campeaoUEL[j]) {
            campeaoAmbas.push(campeaoUCL[i])
        }
    }
}
console.log(campeaoAmbas); 