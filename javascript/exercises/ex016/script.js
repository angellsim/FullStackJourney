function sum(a, b) {
  console.log(a + b)
}

sum(5, 7)
sum(8, 3)

function joinText(text1 = "", text2 = "", text3 = ""){
  console.log(text1, text2, text3)
}

joinText("I", "love", "JavaScript!")
joinText("Gojo", "Satoru")

function printName(username) {
  console.log("Hello, " + username + "!")
}

printName("Gojo Satoru")
printName("Geto Suguru")
