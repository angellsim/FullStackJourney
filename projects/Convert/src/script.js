const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

const USD = "5.25"
const EUR = "5.00"
const GBP = "6.00"

amount.addEventListener("input", () => {
  
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")

})

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

function convertCurrency(amount, price, currency) {

  console.log(amount / price)
}