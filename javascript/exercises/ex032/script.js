const input = document.querySelector("input")
const form = document.querySelector("form")

/* input.addEventListener("input", () => {
  const value = input.value

  const regex = /\D+/g

  console.log(value.match(regex))
}) */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (regex.test(value)) {
    console.log(value)
  } else {
    alert("Valor inválido")
  }

  const regex = /\D+/g
  const value = input.value.replace(regex, "") // É o texto digitado pelo usuário já formatado
  console.log(value)
})