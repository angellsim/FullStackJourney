/*
  Função anônima é uma função que não possui nome. Muitas vezes utilizadas dentro de uma variável constante para ser acessada sempre que for necessária.
*/

const msg = function() {
  return "Hello World!"
}

console.log(msg)
console.log(msg())

const msg2 = function(message, name){
  return message + name
}

console.log(msg2("Hello ", "Alice"))