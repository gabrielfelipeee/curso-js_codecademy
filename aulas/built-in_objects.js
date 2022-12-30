console.log(Math.random()) // Retorna um número de 0 a 1

console.log(Math.random() * 10) // Retorna um número de 0 a 10

console.log(Math.floor(Math.random() * 10)) // arredonda o número para baixo para o número INTEIRO mais próximo. 

console.log(Number.isInteger(10))



// Mais sobre o Math

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

/*
                                    Objetos embutidos
Math.random() gera um número aleatório entre 0 e 1. (Ambos inclusos)

Math.random() * 10 gera um número entre 0 e 10 (ambos inclusos). Pois multiplicamos esse número por 10.

Math.floor() arredonda o número para baixo para o número INTEIRO mais próximo.


Math é o objeto embutido
.rondom é o método (Gera um número de 0 a 1)
.floor também é um método (arredonda o número para baixo para o número INTEIRO mais próximo.)

*/




/*
Number é outro objeto embutido

ex:

console.log(Number.isInteger(10))
=> Verifica se o número é inteiro, nesse caso o 10, e retorna true ou false, Usando o método isInteger()
*/