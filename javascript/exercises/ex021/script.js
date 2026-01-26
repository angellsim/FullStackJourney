// É possível usar outras funções como parâmetros de uma função. Da seguinte maneira:

function executar(message, callback){
  console.log("Executando a função: " + message)

  callback()
}

function callback(){
  console.log("Tarefa finalizada")
}

// Passando para a função
executar("Abrindo arquivo", callback)

// Criando a função dentro do próprio parâmetro

executar("Upload do arquivo...", function(){
  console.log("Upload finalizado")
})

// Arrow function

executar("Excluindo arquivos...", () => {
  console.log("Arquivos excluídos com sucesso")
})

// Quando é somente uma linha, pode ser simplificado ainda mais

executar("Salvando arquivos...", () => console.log("Arquivos salvos com sucesso"))