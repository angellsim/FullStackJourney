const input = document.querySelector("input")
const form = document.querySelector("form")

// https://app.rocketseat.com.br/jornada/full-stack/sala/fundamentos-do-javascript/grupo/depuracao-de-codigo/aula/depurando-o-codigo
// Usar o inspect e ir em Source para fazer a depuração do código!!

form.onsubmit = (event) => {
  event.preventDefault();

  const value = input.value
  const hasNumberRegex = /\d+/g

  if (hasNumberRegex.test(value)) {
    alert("Por favor, digite um nome sem números!")
  } else {
    alert("Formulário enviado com sucesso!")
  }
}