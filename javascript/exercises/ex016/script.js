/*
    - Parâmetros: é uma variável que irá receber valores quando a função for chamada.
    - Argumentos: são os valores que são passados para os parâmetros.
*/

function sum(a, b) {
  return a + b
}

let result1 = sum(5, 7)
let result2 = sum(8, 3)

console.log(result1, result2)

function joinText(text1 = "", text2 = "", text3 = ""){
  console.log(text1, text2, text3)
}

joinText("I", "love", "JavaScript!")
joinText("Gojo", "Satoru")

function printName(username) {
  console.log("Hello, " + username + "!")
}

printName("Gojo Satoru")
printName("Geto Suguru")
