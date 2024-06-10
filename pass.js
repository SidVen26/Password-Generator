const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let len = characters.length
let passOne = document.getElementById("passOne-el")
let passTwo = document.getElementById("passTwo-el")
let passLenInput = document.getElementById("password-length")

function genPassword (passLen = 7) {
    let pass = ""
    for (let i = 1; i <= passLen; i++) {
         pass += characters[Math.floor(Math.random()*len)]
    }

    return pass
}

 window.create = function () {
  console.log("button clicked")
  let passLen = parseInt(passLenInput.value) || 7
  passOne.textContent = genPassword(passLen)
  passTwo.textContent = genPassword(passLen)
}






