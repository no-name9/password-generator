let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

let hasGeneretedPasswords = false
let passwordOne = document.querySelector("#passwordOne")
let passwordTwo = document.querySelector("#passwordTwo")
let passwordStringOne = ""
let passwordStringTwo = ""


function generate() {
  if (hasGeneretedPasswords === false) {
    generatePasswordOne()
    generatePasswordTwo()
    hasGeneretedPasswords = true
  }
  else if (hasGeneretedPasswords === true) {
    passwordStringOne = ""
    passwordStringTwo = ""
    hasGeneretedPasswords = false
    generate()
  }
}


function generatePasswordOne() {
  for (let i = 1; i <= 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    passwordStringOne += characters[randomIndex]
  }
  passwordOne.textContent = passwordStringOne
  return passwordStringOne
}

function generatePasswordTwo() {
  for (let i = 1; i <= 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    passwordStringTwo += characters[randomIndex]
  }
  passwordTwo.textContent = passwordStringTwo
  return passwordStringTwo
}