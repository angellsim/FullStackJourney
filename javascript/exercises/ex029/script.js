const scroll = document.querySelector('ul')

scroll.addEventListener("scroll", () => {
  console.log(scroll.scrollTop)

  if (ul.scrollTop > 300){
    console.log("FIM DA LISTA")
  }
})