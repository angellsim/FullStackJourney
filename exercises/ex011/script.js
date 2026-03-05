var checkbox = document.querySelector("#roxo");
var form = document.querySelector("form");

checkbox.addEventListener("change", function() {
  document.body.style.background = 
  checkbox.checked ? "purple" : "";
});

form.addEventListener("submit", function(event) {
  console.log("Salvando o valor", form.elements.valor.value)
  event.preventDefault();
})