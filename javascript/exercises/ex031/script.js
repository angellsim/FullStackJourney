const input = document.querySelector("input")

// Captura todas as teclas pressionadas pelo usuário

/* input.addEventListener("keydown", (event) => {
  console.log(event.key)
}) */

// Captura apenas as teclas que foram caracteres (letras, números, símbolos)
input.addEventListener("keypress", (event) => {
  console.log(event.key)
})

input.onchange = () => {
  inputChange()
}

function inputChange(){
  console.log("O input mudou")
}