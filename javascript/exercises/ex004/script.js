console.log(nome)

var nome = "Satoru Gojo"

/* Por que isso acontece? --> o javascript 
primeiramente pega somente a parte de declaração da variável
ou seja, ele pega somente o "var nome", sem a parte do "= ..." */

//Isso é uma criação de escopo de bloco

var nome2 = "Suguru Geto"

{
  console.log(nome2)
}

// Lembra que foi dito que uma variável declarada com "let" responde somente com escopo de bloco? Então, por exemplo:

{
  let nome3 = "Ieiri Shoko"
}

console.log(nome3) // Esse código retorna um erro por "nome3 is not defined". Já que ele pertencerá somente ao bloco de código onde foi definido. Agora, se for definido dentro do código por completo, então ele funcionará normalmente.