// ------------- Setup -------------

// Define password options
const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


// Get button from HTML
genBtn = document.getElementById("gen-btn")
genBtn.addEventListener("click", generatePassword)

// Get Password options from HTML
let passwordLengthInput = document.getElementById("password-length-input")
let numberFlag = document.getElementById("number-flag")
let symbolFlag = document.getElementById("symbol-flag")

// Get output password from HTML
let passwords = document.querySelectorAll(".password p")
let passwordBoxes = document.querySelectorAll(".password")


// Make generated password as clickable copy button
let tempCopyPassword = function() {
    copyPassword(this)
    // document.querySelectorAll(".tooltip").forEach( (elem) => {
    //     elem.textContent = "Copied"
    // })
    // console.log("should work")
}

passwords.forEach( (elem) => {
    elem.addEventListener("click", tempCopyPassword)
})





// ------------- Function  -------------
function generatePassword(){


    let characters = alphabets

    if (numberFlag.checked) {
        characters = characters.concat(numbers)
    }

    if (symbolFlag.checked) {
        characters = characters.concat(symbols)
    }

    let passwordLength = passwordLengthInput.value

    for (let password of passwords) {
        outputPassword = ""
        for (let i=0; i<passwordLength; i++) {
            let randIdx = Math.floor( (Math.random() * characters.length) )
            outputPassword += characters[randIdx]
        }
        password.textContent = outputPassword
    }

    // Dynamically change the width of the output box
    let ratio = 200 / 15  // 200 pixel width for 15 words
    passwordBoxes.forEach( (elem) => {
        if (passwordLength>15) {
            elem.style.width = (passwordLength * ratio) + "px"
        } else {
            elem.style.width = "200px"
        }
    })
}



function copyPassword(elem) {
    console.log(elem.textContent)
    navigator.clipboard.writeText(elem.innerText)
}
