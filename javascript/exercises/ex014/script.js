// Try, catch e finally

try {
  console.log(resultado) // Não há resultado, logo dará erro e ele irá para o catch
} catch (error) { // Catch só é executado se houver um erro quando o try for executado
  console.log('Erro capturado: ' + error.message)
} finally { // Finally executa independentemente do resultado. Pode dar erro ou não, é um código que sempre será executado no final.
  console.log("Fim")
}

// Exemplo 2
// let num = 1

try {
  if (num === 0) {
    throw new Error("Um erro ocorreu porque o número escolhido é 1") // Você lança um erro no sistema por si próprio
  } 
} catch (error){
  console.log("Erro capturado: " + error.message)
} finally {
  console.log("Fim do segundo exemplo") // Lembrando que o finally é opcional
}