/*
Return:

- A declaração return finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.

- Quando uma return é usada no corpo de uma função, a execução da função é interrompida e o código que a segue não será executado. Veja o exemplo abaixo:

-Se um argumento para largura ou altura for menor que 0, calcularArea() retornará 'Vocẽ precisa de números inteiros positivos para calcular a área'. A segunda instrução de retorno largura * altura não será executada.

Ex:
*/
function calcularArea(largura, altura) {
    if (largura < 0 || altura < 0) {
        return 'Vocẽ precisa de números inteiros positivos para calcular a área'
    }
    return largura * altura
}

// - A return é poderosa porque permite que as funções produzam uma saída. Podemos então salvar a saída em uma variável para uso posterior. Ex:

function soma(n, n2) {
    return n + n2
  }
  const resSoma = soma(5, 10)
  console.log(resSoma)




  /*
  Funções auxiliares:

  - Também podemos usar o valor de retorno de uma função dentro de outra função. Essas funções sendo chamadas dentro de outra função geralmente são chamadas de funções auxiliares.
  
  Ex: Se quiséssemos definir uma função que converta a temperatura de Celsius para Fahrenheit, poderíamos escrever duas funções como:

  fórmula: (15 °C × 9/5) + 32 = 59 °F

  */
 function mult(num) {
    return num * (9/5)
 }


 function fahrenheit(celsius) {
    return mult(celsius) + 32
 }
 let fahr = fahrenheit(15)

 console.log(fahr)

 /*
 Explixação:

 - fahrenheit() é chamado e 15 é passado como um argumento.

- O bloco de código dentro de fahrenheit() chama mult() e passa 15 como um argumento.

- mult() recebe o argumento de 15 para o parâmetro num.

- O bloco de código dentro da mult()função é multiplicado 15 por (9/5), que é avaliado como 27.

- 27 é retornado para a chamada de função em fahrenheit().

- fahrenheit() continua a executar. Acrescenta 32 a 27, que é avaliado como 59.

Finalmente, 59 é retornado para a chamada de função fahrenheit(15).
 */


// Outro ex com o mesmo sentido:

function quantCadeiras(linhas, colunas) {
    return linhas * colunas
}

function total(linhas, colunas) {
    return quantCadeiras(linhas, colunas)
}

const totalCadeiras = total(5, 4)

console.log(totalCadeiras)