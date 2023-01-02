/*

switch => 

switch - inicia a instrução e é seguida por (), que contém o valor que cada uma case irá comparar.

case - A palavra- case verifica se a expressão corresponde ao valor especificado que vem depois dela.

break - diz ao computador para sair do bloco e não executar mais nenhum código ou verificar quaisquer outros casos dentro do bloco de código.

Obs: sem break, o primeiro caso correspondente será executado, mas também todos os casos subsequentes, independentemente de haver ou não correspondência, incluindo o padrão. Esse comportamento é diferente das instruções condicionais if/ else que executam apenas um bloco de código.

default - No final de cada switch, há uma default. Se nenhum dos cases for verdadeiro, o código na default será executado.

Ex:
*/

let precoFrutas = 'manga'

switch (precoFrutas) {
    case 'manga':
        console.log('Mangas são R$ 5,00/kg')
        break;
    case 'limão':
        console.log('Limões são R$ 4,00/kg')
        break;
    case 'maçã':
        console.log('Macãs são R$ 7,87/kg')
        break;
    case 'pera':
        console.log('peras são R$ 8,99/kg')
        break;
    case 'melancia':
        console.log('Melancia é R$ 15,00/unid')
        break;
    default:
        console.log('Fruta desconhecida')
}




// Se estiver frutas com o mesmo preço, por exemplo (pera e maça), podemos fazer assim:

switch (precoFrutas) {
    case 'manga':
        console.log('Mangas são R$ 5,00/kg')
        break;
    case 'limão':
        console.log('Limões são R$ 4,00/kg')
        break;
    case 'maçã':
    case 'pera':
        console.log('Peras e maçãs são R$ 7,99/kg')
        break;
    case 'melancia':
        console.log('Melancia é R$ 15,00/unid')
        break;
    default:
        console.log('Fruta desconhecida')
}
