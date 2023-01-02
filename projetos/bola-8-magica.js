let nomeUsuario = '' //Seu nome
nomeUsuario ? console.log(`Hello, ${nomeUsuario}!`) : console.log('Hello!')

let perguntaDoUsuario = '' //Faça uma pergunta, e a resposta vai uma das 8 cases (aleatorio).
console.log(`${perguntaDoUsuario}`)

let numAleatorio = Math.floor(Math.random() * 7)
let bolaOito = ''

switch(numAleatorio) {
    case 0:
        bolaOito = "Claro que sim."
        break;
    case 1:
        bolaOito = "É decididamente assim."
        break;
    case 2:
        bolaOito = "Resposta, tente novamente."
        break;
    case 3:
        bolaOito = "Não posso prever agora."
        break;
    case 4:
        bolaOito = "Não conte com isso."
        break;
       case 5:
        bolaOito = "As minhas fontes dizem que não."
        break;
    case 6:
        bolaOito = "Perspectivas não tão boas."
        break;
    case 7:
        bolaOito = "Os sinais apontam para sim."
        break;
}
console.log(bolaOito)




// usando if e else

/*
if (numAleatorio === 0) {
    bolaOito = "Claro que sim."
} else if (numAleatorio === 1) {
    bolaOito = "É decididamente assim."
} else if (numAleatorio === 2) {
    bolaOito = "Resposta nebulosa, tente novamente."
} else if (numAleatorio === 3) {
    bolaOito = "Não posso prever agora."
} else if (numAleatorio === 4) {
    bolaOito = "Não conte com isso."
} else if (numAleatorio === 5) {
    bolaOito = "As minhas fontes dizem que não." 
} else if (numAleatorio === 6) {
    bolaOito = "Perspectivas não tão boas."
} else { // Aqui vai ser o 7
    bolaOito = "Os sinais apontam para sim."
}
console.log(bolaOito)
*/