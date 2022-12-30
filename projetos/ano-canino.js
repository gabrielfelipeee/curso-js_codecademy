/* 
A ideia é converter "anos-humanos" em "anos-caninos".

* 8 anos na vida de um ser humano equivalem a 45 anos na vida de um cachorro.

Info:
- Os primeiros dois anos da vida de um cão contam como 10,5 anos-caninos cada.
- Cada ano seguinte equivale a 4 anos-caninos.
*/


let idadeHumana = 8 // anos-humanos

let primeirosAnos = 2 // 2 primeiros anos-caninos
primeirosAnos = 2 * 10.5 // Total dos 2 primeiros anos em anos-humanos.

let proximosAnos = idadeHumana - 2 // Diminuido os 2 primeiros anos, pois já foram contabilizados.
proximosAnos *= 4 // Multiplicando os outros 6 anos (nesse caso), por 4 (anos-caninos).

let idadeHumanaInIdadeCanina = primeirosAnos + proximosAnos // Idade Humana em idade canina

console.log(`${idadeHumana} anos-humanos são ${idadeHumanaInIdadeCanina} anos-caninos.`)
// 8 anos-humanos são 45 anos-caninos.
