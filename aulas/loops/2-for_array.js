/*
Para percorrer cada elemento em um ARRAY, um for deve usar a propriedade .length da array em sua condição.
*/
let animais = ["leão", "galinha", "gato", "girafa", "tigre"];
for (let i = 0; i < animais.length; i ++) { 
    console.log(animais[i]); // Mostra todos os elementos da array animais
}



// Outro ex
let paises = ["Inglaterra", "Escócia", "País de Gales", "Irlanda do Norte"]
for (let i = 0; i < paises.length; i ++) {
    console.log(`${paises[i]} fazem parte do Reino Unido.`)
}

/*
Nos loops acima, nomeamos nossa variável iteradora i. Esta é uma convenção de nomenclatura de variável que você verá em muitos loops. Quando usamos i para iterar através de arrays, podemos pensar nisso como uma abreviação da palavra índice . Observe como nossa condição de parada verifica se i é menor que animais.length. Lembre-se que os arrays são indexados por zero, o índice do último elemento de um array é equivalente ao comprimento desse array menos 1.
*/