const itemInput = document.getElementById('input-item')
const addItemButton = document.getElementById('add-item')
const ulList = document.getElementById('ul')

addItemButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (itemInput.value === "") {
    alert("Por favor, digite alguma coisa no campo de entrada.");
    return;
  }

  const newItem = document.createElement('li') // Cria um novo elemento de lista (li)
  newItem.classList.add("checkbox-list") // Adiciona uma nova classe ao "newItem" que nós definimos

  const checkbox = document.createElement('input')
  checkbox.type = "checkbox" // Define o tipo de input que é a variável checkbox

  const span = document.createElement("span")
  span.textContent = itemInput.value // O conteúdo de texto que está dentro da variável span recebe o valor que o usuário digitar no itemInput.

  const deleteButton = document.createElement("button")
  const deleteIcon = document.createElement("img")
  deleteIcon.src = "assets/icons/delete-small.svg"
  deleteIcon.alt = "Ícone de deletar"

  deleteButton.appendChild(deleteIcon) // deleteButton vai receber o deleteIcon como filho direto, assim como é no código HTML 

  newItem.append(checkbox)
  newItem.append(span)
  newItem.append(deleteButton) // Adiciona os próximos filhos diretos do newItem

  ulList.appendChild(newItem)

  itemInput.value = ""
  itemInput.focus()

})

ulList.addEventListener("click", (event) => {
  const clickedElement = event.target

  if (clickedElement.tagName === "BUTTON" || clickedElement.tagName === "IMG") {
    const item = clickedElement.closest("li")
    if (item) {
      item.remove()
    }
  } 
})






