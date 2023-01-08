/*
O escopo rígido de suas variáveis ​​melhorará muito seu código de várias maneiras:


- O código ficará mais legível, pois os blocos organizarão seu código em seções discretas.

- O código mais compreensível, pois esclarece quais variáveis ​​estão associadas a diferentes partes do programa, em vez de ter que acompanhá-las linha após linha!

- É mais fácil manter seu código, já que seu código será modular.

- Isso economizará memória em seu código porque deixará de existir após o término da execução do bloco.

Ex:
*/
const paises = () => {
    let pais = 'Andorra'
    let continente = 'Europa'

    if (continente === 'Europa') {
      let pais = 'Espanha'
      console.log(pais)
    }
    console.log(pais)
  }
  paises()

  /*
  Dentro do BLOCO if console.log(pais) registrará o valor Espanha no console. Fora do BLOCO if, mas ainda dentro da função, a mesma instrução é registrada Andorra no console.

  Isso porque:
   Quando uma variável é definida dentro de um bloco, ela só é ACESSÍVEL ao código entre chaves {}.
  
  */