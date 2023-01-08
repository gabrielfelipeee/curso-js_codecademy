/*
Blocos e escopos:

- Já vimos blocos usados ​​antes em funções e if instruções. Um bloco é o código encontrado dentro de um conjunto de chaves {}.

- Os blocos nos ajudam a agrupar uma ou mais instruções e servem como um marcador estrutural importante para o nosso código.

*/





/*
Variáveis globais:

-Escopo é o contexto no qual nossas variáveis ​​são declaradas. Pensamos no escopo em relação aos blocos porque as variáveis ​​podem existir fora ou dentro desses blocos.

- No escopo global, as variáveis ​​são declaradas fora dos blocos. Essas variáveis ​​são chamadas de variáveis ​​globais.

Ex:
*/
const cor = 'blue'

const returnCor = () => {
    return cor
}
console.log(returnCor())

/*
- Mesmo que a variável cor seja definida fora do bloco, ela pode ser acessada no bloco funcional, dando-lhe escopo global. Por sua vez, cor pode ser acessado dentro da funçao returnCor.
*/
// Outro ex;

const cidade  = 'Londres'
const pais = 'Inglaterra'
const continente = 'Europa'
function localizacao() {
    return `${cidade} é a capital da ${pais}, país que está localizado na ${continente}.`
}
console.log(localizacao())



/*
Escopo do bloco:

- Quando uma variável é definida dentro de um bloco, ela só é acessível ao código entre chaves {}. 

- As variáveis ​​que são declaradas com escopo de bloco são conhecidas como variáveis ​​locais porque só estão disponíveis para o código que faz parte do mesmo bloco.

Ex:
*/
const futebol = () => {
    let time = 'Liverpool'
    console.log(time)
}
futebol();
//console.log(time) //vai dar erro, pois time está dentro da função.

/*
- Definimos uma função futebol().

- Dentro da função, variável time só está disponível entre as chaves da função.

- Se tentarmos logar a mesma variável fora da função, ela lançará um ReferenceError.
*/