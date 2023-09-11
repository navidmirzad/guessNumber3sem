//

const lblMessage = document.querySelector(".message");

console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

let inpGuess = document.querySelector(".guess");
console.log(inpGuess);

function randomNumber() {
    let randomNum = Math.floor(Math.random() * 20) + 1;
    lblNumber.textContent = randomNum
    console.log(randomNum)
}


// skal checke om det vi indsætter i 'inputGuess' matcher det random tal
function checkIfEqual() {
    if (inpGuess.value == randomNumber()) {
        return console.log("The two numbers are equal")
    } else {
        console.log("Try again")
    }
}

const button = document.querySelector(".check")
button.addEventListener("click", checkIfEqual)







