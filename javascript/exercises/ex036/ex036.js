const titulo = document.getElementById('original-title')
const botao = document.getElementById('btn-change-title')

botao.addEventListener("click", () => {

  titulo.textContent = "Novo Título"

})