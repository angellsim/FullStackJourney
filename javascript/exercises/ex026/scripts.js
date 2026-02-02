const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Satoru"

// const guestSurname = document.createElement("span")
// guestSurname.textContent = "Gojou"

// Adiciona após o último filho (possível adicionar mais de um colocando vírgula para separação)
newGuest.appendChild(guestName)

// Adiciona antes do primeiro filho

guests.append(newGuest)


