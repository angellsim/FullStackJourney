let form = document.querySelector("form");

// A diferença entre usar o addEventListener ou ir diretamente é que diretamente ele irá ler somente a última função atribuída ao evento, enquanto utilizar o AddEventListener permite adicionar múltiplas funções que serão executadas igualmente.

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você enviou o formulário #1")
}

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você enviou o formulário #2")
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você enviou o formulário #3")
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você enviou o formulário #4")
})

// Nesse caso, ele executará somente o número #2, #3 e #4