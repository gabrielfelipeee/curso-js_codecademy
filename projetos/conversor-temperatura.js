let kelvin = 273 // Temperatura em K
let celsius = kelvin - 273 // Converte K para °C

let fahrenheit = celsius * (9 / 5) + 32 // Converte °C para °F
fahrenheit = Math.floor(fahrenheit) // Arredonda para baixo, para o número inteiro mais próximo.

let newton = celsius * (33 / 100) // Converte °C para a escala de newton.
newton = Math.floor(newton)  // Arredonda para baixo, para o número inteiro mais próximo.

console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`)

console.log(`The temperature is ${newton} degress Scale Newton.`)