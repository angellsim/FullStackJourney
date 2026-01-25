/* Conversão de Tipo 
  é quando um valor tem um tipo específico mas é forçado através de uma função a mudar o seu valor. Por exemplo, um valor Number ser forçado a mudar para String
*/

let number = 8
console.log(typeof number) // Resultado = number
console.log(typeof number.toString()) // Resultado = string

let string = "1234"
console.log(typeof string) // Resultado = string
console.log(typeof Number(string)) // Resultado = number

/* Coerção de tipo é quando o Javascript mudará o valor de um   tipo para outro automaticamente, ele tenta se adaptar de acordo com o contexto do valor
*/

let numeroString = "10"
let soma = numeroString + 9

console.log(soma) // Resultado = 109

// Estritamente igual e estritamente diferente

let one = 1
let two = 2

console.log(one == "1") // Resultado = true (valor igual)
console.log(one === "1") // Resultado = false (valor e tipo são diferentes)
console.log(1 === "1") // Resultado = false (valor e tipo são diferentes)
console.log(1 === 1) // Resultado = true (valor e tipo são estritamente iguais)
console.log(two != "2") // Resultado = false (valor igual)
console.log(two !== "2") // Resultado = true (valor e tipo são diferentes)