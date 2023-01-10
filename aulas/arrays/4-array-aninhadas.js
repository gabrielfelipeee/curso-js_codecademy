/*
Arrays aninhadas:

- Quando uma array contém outra array, ela é conhecida como array aninhada.

Ex:
*/
let arrayAninhada = [[10], [15, 25, 35], [100, 200, 400]]

/* Para acessar os arrays aninhados, podemos usar a notação de colchetes com o valor do índice, assim como fizemos para acessar qualquer outro elemento.

Ex:
*/
let arrayTarget = arrayAninhada[1] // Segunda array
console.log(arrayTarget)


// Acessando elementos
let target = arrayAninhada[2][1] // 3° array, 2° elemento => 200
console.log(target)