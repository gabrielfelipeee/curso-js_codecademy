/*
                                Registro de corredores
Dados:

- Existem corredores adultos (maiores de 18 anos) e corredores juvenis (menores de 18 anos).
- Eles podem se registrar CEDO ou TARDE. Os corredores recebem um NÙMERO de corrida e hora de início com base em sua IDADE e REGISTRO.



Número da corrida:

Os primeiros adultos recebem um número de corrida igual ou superior a 1000.
Todos os outros recebem um número abaixo de 1000.



Hora de início:

- Os inscritos adultos correm às 9h30 ou 11h.
- Os primeiros adultos correm às 9h30. (Registro CEDO)
- Os adultos atrasados ​​correm às 11h. (Registro TARDE)
- Os inscritos juvenis correm às 12h30 (independentemente da inscrição).

*/


let numCorrida = Math.floor(Math.random() * 1000)
let idade = 19
let registroCedo = true

if (idade >= 18 && registroCedo) {
    numCorrida += 1000
}

if (numCorrida >= 1000) {
    console.log(`Seu número de corrida é ${numCorrida}, você correrá às 9h30.`)
} else if (idade >= 18 && registroCedo == false){
    console.log(`Seu número de corrida é ${numCorrida}, você correrá às 11h00.`)
} else {
    console.log(`Seu número de corrida é ${numCorrida}, você correrá às 12h00.`)    
}