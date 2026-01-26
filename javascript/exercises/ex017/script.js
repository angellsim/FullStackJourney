// A função pode ser chamada antes mesmo da sua declaração por conta do conceito do Hoisting, que são executadas as variáveis e funções antes mesmo do código ser executado.
sendMessage("Olá tudo bem?")
sendMessage("Como você está?")

function sendMessage(msg) {
  console.log(msg)
  endLine()

  function endLine() {
    console.log("")
  }
}