/*
-  - A poluição do escopo ocorre quando existem muitas variáveis ​​em um namespace ou nomes de variáveis ​​são reutilizados.

 - A poluição de escopo ocorre quando temos muitas variáveis ​​globais existentes no namespace global ou quando reutilizamos variáveis ​​em diferentes escopos. A poluição do escopo dificulta o acompanhamento de nossas diferentes variáveis ​​e nos prepara para possíveis acidentes. Por exemplo, variáveis ​​com escopo global podem colidir com outras variáveis ​​com escopo mais local, causando um comportamento inesperado em nosso código.

 Ex: 
*/
let num = 50
const numero = () => {
    num = 100 // num passou a ser 100
    return num
}
console.log(numero())

/*
- Temos uma variável num.

- Dentro do corpo da função de numero(), queremos declarar uma nova variável, mas esquecemos de usar a palavra-chave let.

- Quando ligamos numero(), num é reatribuído para 100.

- A reatribuição interna numero() afeta a variável global num.

O problema:
- Mesmo que a reatribuição seja permitida e não recebamos um erro, se decidirmos usar num mais tarde, usaremos sem saber o novo valor de num. 
*/