// Separando cada uma das variáveis
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Valores das moedas em relação ao Real
const USD = "5.25"
const EUR = "5.00"
const GBP = "6.00"

// Formatando o campo de valor do input para aceitar somente números
amount.addEventListener("input", () => {
  
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")

})

// Adicionando o evento de submit ao formulário 

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter o valor do Real para a moeda que o usuário selecionar

function convertCurrency(amount, price, currency) {

  try { 
    // Formatação do texto para o tipo selecionado
    description.textContent = `${currency} 1 = ${formatCurrencyBRL(price)}`

    // Fazer a caixa de texto aparecer no site
    footer.classList.add("show-result") 
  } catch(error) {
    // Remove a caixa de texto caso haja um erro e exibe uma mensagem de alerta para o usuário
    footer.classList.remove("show-result")
    alert("Ocorreu um erro. Por favor, tente novamente.")
    console.log(error)
  }
}

// Formata a moeda em Real brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}