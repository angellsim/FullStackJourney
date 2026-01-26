// console.log(document)

// Obter o título da página
console.log(document.title)

// Obter o elemento pelo ID (SELETOR ID)
const guest2 = document.getElementById('guest-2')

// Obter o elemento pela classe (SELETOR class)
const guestsClass = document.getElementsByClassName('guest')

console.dir(guestsClass)

console.log(guestsClass[0])
// ou console.log(guestsClass.item(0))

// Obter o elemento pela tag (SELETOR tag)
const guestsTag = document.getElementsByTagName('li')

console.log(guestsTag)

// Obter as propriedades do elemento
console.dir(guest2)
