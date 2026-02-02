window.addEventListener("load", () => {
  console.log("A página foi carregada.")
})

addEventListener("click", (event) => {
  // Desabilitar a função padrão do evento
  event.preventDefault()

  // Retorna todas as informações do evento
  // console.log(event)

  // Retorna as informações HTML do elemento alvo
  console.log(event.target)

  // Retorna as informações de texto do elemento alvo
  console.log(event.target.textContent)
})